import { NextResponse } from "next/server";
import type { InstagramPost } from "@/lib/instagram";

export type { InstagramPost };

export const revalidate = 3600; // 1 Stunde Cache

async function fetchViaFacebookPage(token: string): Promise<InstagramPost[]> {
  // Schritt 1: Facebook-Seiten des Accounts holen
  const pagesRes = await fetch(
    `https://graph.facebook.com/v21.0/me/accounts?access_token=${token}`
  );
  const pages = await pagesRes.json();
  if (!pages.data?.length) throw new Error("Keine Facebook-Seite gefunden");

  // Schritt 2: Instagram Business Account der ersten Seite holen
  const pageId = pages.data[0].id;
  const pageToken = pages.data[0].access_token;
  const igRes = await fetch(
    `https://graph.facebook.com/v21.0/${pageId}?fields=instagram_business_account&access_token=${pageToken}`
  );
  const igData = await igRes.json();
  const igUserId = igData.instagram_business_account?.id;
  if (!igUserId) throw new Error("Kein Instagram Business Account verbunden");

  // Schritt 3: Posts holen
  const mediaRes = await fetch(
    `https://graph.facebook.com/v21.0/${igUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=12&access_token=${pageToken}`
  );
  const media = await mediaRes.json();
  return media.data ?? [];
}

async function fetchViaInstagramToken(token: string): Promise<InstagramPost[]> {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=12&access_token=${token}`
  );
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.data ?? [];
}

export async function GET() {
  const token = process.env.META_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Kein Token konfiguriert" }, { status: 500 });
  }

  try {
    // Versuche zuerst Instagram Graph API (für Instagram-spezifische Tokens)
    const posts = await fetchViaInstagramToken(token).catch(() =>
      // Falls das fehlschlägt: Facebook Page → Instagram Business Account
      fetchViaFacebookPage(token)
    );

    return NextResponse.json({ posts }, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200" },
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message, posts: [] },
      { status: 500 }
    );
  }
}
