export const prerender = false;

import type { APIRoute } from "astro";
import { upsertPost } from "../../../lib/blog";
import { uploadImage } from "../../../lib/cloudinary";

const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const POST: APIRoute = async ({ request }) => {
  const password = import.meta.env.BLOG_INGEST_PASSWORD;
  const auth = request.headers.get("Authorization");

  if (!auth || auth !== `Bearer ${password}`) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

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
    console.error("Ingest error:", message);
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
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
