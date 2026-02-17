export const prerender = false;

import type { APIRoute } from "astro";
import { getLinkedInAuthUrl } from "../../../../utils/linkedin";

export const GET: APIRoute = ({ redirect }) => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321";
  const redirectUri = `${siteUrl}/api/auth/linkedin/callback`;
  const authUrl = getLinkedInAuthUrl(redirectUri);
  return redirect(authUrl, 302);
};
