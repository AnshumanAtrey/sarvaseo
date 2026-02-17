const LINKEDIN_AUTH_URL = "https://www.linkedin.com/oauth/v2/authorization";
const LINKEDIN_TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken";
const LINKEDIN_USERINFO_URL = "https://api.linkedin.com/v2/userinfo";

export function getLinkedInAuthUrl(redirectUri: string): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: import.meta.env.LINKEDIN_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: "openid profile email",
  });
  return `${LINKEDIN_AUTH_URL}?${params.toString()}`;
}

export async function exchangeCodeForToken(
  code: string,
  redirectUri: string
): Promise<string> {
  const response = await fetch(LINKEDIN_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: import.meta.env.LINKEDIN_CLIENT_ID,
      client_secret: import.meta.env.LINKEDIN_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error(`LinkedIn token exchange failed: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function getUserProfile(
  accessToken: string
): Promise<{ name: string; email: string }> {
  const response = await fetch(LINKEDIN_USERINFO_URL, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error(`LinkedIn profile fetch failed: ${response.status}`);
  }

  const data = await response.json();
  return {
    name: data.name || data.given_name || "User",
    email: data.email || "",
  };
}
