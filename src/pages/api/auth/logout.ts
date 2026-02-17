export const prerender = false;

import type { APIRoute } from "astro";
import { clearSessionCookie } from "../../../utils/session";

export const GET: APIRoute = ({ redirect }) => {
  const cookie = clearSessionCookie();
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
      "Set-Cookie": cookie,
    },
  });
};
