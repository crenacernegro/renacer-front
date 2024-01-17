import type { Project } from "../../types";

export default async function getProjects(): Promise<Project[]> {
  const res = await fetch(
    "https://renacer-admin-2aud.vercel.app/api/309c0e25-251c-4f13-a300-169ae2a631dd/projects"
  );
  if (!res.ok) throw new Error("Error fetching projects");

  return res.json() as Promise<Project[]>;
}
