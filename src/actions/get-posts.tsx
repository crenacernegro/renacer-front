import type { Post } from "../../types";

export default async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://renacer-admin-2aud.vercel.app/api/309c0e25-251c-4f13-a300-169ae2a631dd/posts"
  );
  if (!res.ok) throw new Error("Error fetching posts");

  return res.json() as Promise<Post[]>;
}
