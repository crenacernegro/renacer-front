import type { Post } from "../../types";

export default async function getPost(postId: string): Promise<Post> {
  const response = await fetch(
    `https://renacer-admin-2aud.vercel.app/api/309c0e25-251c-4f13-a300-169ae2a6301dd/posts/${postId}`
  );
  if (!response.ok) throw new Error("Error fetching post");
  return response.json() as Promise<Post>;
}
