export const prerender = false;

import type { APIRoute } from "astro";
import { exchangeCodeForToken, getUserProfile } from "../../../../utils/linkedin";
import { createSessionCookie } from "../../../../utils/session";

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error || !code) {
    return redirect("/?auth=error", 302);
  }

  try {
    const siteUrl = import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321";
    const redirectUri = `${siteUrl}/api/auth/linkedin/callback`;

    const accessToken = await exchangeCodeForToken(code, redirectUri);
    const profile = await getUserProfile(accessToken);
    const cookie = await createSessionCookie(profile.name, profile.email);

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/?auth=success",
        "Set-Cookie": cookie,
      },
    });
  } catch {
    return redirect("/?auth=error", 302);
  }
};
