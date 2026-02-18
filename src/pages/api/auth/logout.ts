export const prerender = false;

import type { APIRoute } from "astro";
import { clearSessionCookie } from "../../../utils/session";

export const GET: APIRoute = () => {
  const cookie = clearSessionCookie();
  const clearMarker = "sarvaseo_logged_in=; Path=/; SameSite=Lax; Max-Age=0";
  const headers = new Headers();
  headers.append("Location", "/");
  headers.append("Set-Cookie", cookie);
  headers.append("Set-Cookie", clearMarker);
  return new Response(null, { status: 302, headers });
};
