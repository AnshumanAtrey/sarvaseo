import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  published: boolean;
  coverImage?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

const blogsCollection = collection(db, "sarvaseo", "config", "blogs");

export async function getAllPublishedPosts(): Promise<BlogPost[]> {
  const q = query(
    blogsCollection,
    where("published", "==", true),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ slug: doc.id, ...doc.data() }) as BlogPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const docRef = doc(blogsCollection, slug);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  const data = snapshot.data() as BlogPost;
  if (!data.published) return null;
  return { slug: snapshot.id, ...data };
}

export async function upsertPost(
  slug: string,
  data: Partial<Omit<BlogPost, "slug">>
): Promise<void> {
  const docRef = doc(blogsCollection, slug);
  const existing = await getDoc(docRef);
  const now = Timestamp.now();

  const writeData: Record<string, unknown> = {
    ...data,
    updatedAt: now,
  };

  if (!existing.exists()) {
    writeData.createdAt = now;
  }

  await setDoc(docRef, writeData, { merge: true });
}

export async function deletePost(slug: string): Promise<boolean> {
  const docRef = doc(blogsCollection, slug);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return false;
  await deleteDoc(docRef);
  return true;
}
