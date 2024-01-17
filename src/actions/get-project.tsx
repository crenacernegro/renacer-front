import type { Project } from "../../types";

export default async function getProject(projectId: string): Promise<Project> {
  const response = await fetch(
    `https://renacer-admin-2aud.vercel.app/api/309c0e25-251c-4f13-a300-169ae2a631dd/projects/${projectId}`
  );
  if (!response.ok) throw new Error("Error fetching project");
  return response.json() as Promise<Project>;
}
