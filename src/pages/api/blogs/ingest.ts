export const prerender = false;

import type { APIRoute } from "astro";
import { upsertPost, deletePost } from "../../../lib/blog";
import { uploadImage } from "../../../lib/cloudinary";

const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function unauthorized() {
  return new Response(JSON.stringify({ error: "Unauthorized" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}

function checkAuth(request: Request, password: string): boolean {
  const auth = request.headers.get("Authorization");
  return !!auth && auth === `Bearer ${password}`;
}

// POST — Create or full update (requires slug, title, content)
export const POST: APIRoute = async ({ request }) => {
  const password = import.meta.env.BLOG_INGEST_PASSWORD;
  if (!checkAuth(request, password)) return unauthorized();

  try {
    const body = await request.json();
    const { slug, title, content, excerpt, author, tags, published, image } = body;

    if (!slug || !title || !content) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: slug, title, content" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!SLUG_REGEX.test(slug)) {
      return new Response(
        JSON.stringify({ error: "Invalid slug format. Use lowercase letters, numbers, and hyphens." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let coverImage: string | undefined;
    if (image) {
      coverImage = await uploadImage(image, slug);
    }

    await upsertPost(slug, {
      title,
      content,
      excerpt: excerpt || "",
      author: author || "SarvaSEO",
      tags: tags || [],
      published: published ?? false,
      ...(coverImage && { coverImage }),
    });

    return new Response(
      JSON.stringify({ success: true, slug, coverImage }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Ingest POST error:", message);
    return new Response(
      JSON.stringify({ error: "Internal server error", detail: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

// PATCH — Partial update (requires slug, rest optional)
export const PATCH: APIRoute = async ({ request }) => {
  const password = import.meta.env.BLOG_INGEST_PASSWORD;
  if (!checkAuth(request, password)) return unauthorized();

  try {
    const body = await request.json();
    const { slug, title, content, excerpt, author, tags, published, image } = body;

    if (!slug) {
      return new Response(
        JSON.stringify({ error: "Missing required field: slug" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!SLUG_REGEX.test(slug)) {
      return new Response(
        JSON.stringify({ error: "Invalid slug format. Use lowercase letters, numbers, and hyphens." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const updates: Record<string, unknown> = {};
    if (title !== undefined) updates.title = title;
    if (content !== undefined) updates.content = content;
    if (excerpt !== undefined) updates.excerpt = excerpt;
    if (author !== undefined) updates.author = author;
    if (tags !== undefined) updates.tags = tags;
    if (published !== undefined) updates.published = published;

    if (image) {
      updates.coverImage = await uploadImage(image, slug);
    }

    if (Object.keys(updates).length === 0) {
      return new Response(
        JSON.stringify({ error: "No fields to update" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await upsertPost(slug, updates);

    return new Response(
      JSON.stringify({ success: true, slug, updated: Object.keys(updates) }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Ingest PATCH error:", message);
    return new Response(
      JSON.stringify({ error: "Internal server error", detail: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

// DELETE — Remove a post (requires slug)
export const DELETE: APIRoute = async ({ request }) => {
  const password = import.meta.env.BLOG_INGEST_PASSWORD;
  if (!checkAuth(request, password)) return unauthorized();

  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug) {
      return new Response(
        JSON.stringify({ error: "Missing required field: slug" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const deleted = await deletePost(slug);

    if (!deleted) {
      return new Response(
        JSON.stringify({ error: "Post not found", slug }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, slug, deleted: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Ingest DELETE error:", message);
    return new Response(
      JSON.stringify({ error: "Internal server error", detail: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, PATCH, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
