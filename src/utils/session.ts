const COOKIE_NAME = "sarvaseo_auth";

async function hmacSign(payload: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payload)
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionCookie(
  name: string,
  email: string
): Promise<string> {
  const secret = import.meta.env.SESSION_SECRET;
  const payload = JSON.stringify({ name, email, ts: Date.now() });
  const encoded = Buffer.from(payload).toString("base64url");
  const sig = await hmacSign(encoded, secret);
  const value = `${encoded}.${sig}`;

  return `${COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`;
}

export async function verifySessionCookie(
  cookieHeader: string | null
): Promise<{ name: string; email: string } | null> {
  if (!cookieHeader) return null;

  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));

  if (!match) return null;

  const value = match.split("=").slice(1).join("=");
  const [encoded, sig] = value.split(".");
  if (!encoded || !sig) return null;

  const secret = import.meta.env.SESSION_SECRET;
  const expectedSig = await hmacSign(encoded, secret);

  if (sig !== expectedSig) return null;

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString());
    return { name: payload.name, email: payload.email };
  } catch {
    return null;
  }
}

export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
