export type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.META_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=12&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    if (data.error) return [];
    return data.data ?? [];
  } catch {
    return [];
  }
}
