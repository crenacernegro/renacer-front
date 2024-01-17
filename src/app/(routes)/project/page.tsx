import getProjects from "../../../actions/get-projects";
import Container from "../../components/ui/container";
import ProjectList from "./components/project-list";

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <Container>
      <div className="mb-4 mt-24 flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProjectList title="Featured Projects" items={projects} />
      </div>
    </Container>
  );
}
