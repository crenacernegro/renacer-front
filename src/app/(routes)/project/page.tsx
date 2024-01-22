import getProjects from "../../../actions/get-projects";
import Container from "../../components/ui/container";
import ProjectList from "./components/project-list";

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <Container>
        <div className="mb-4 mt-24 grid grid-cols-1 gap-4 p-8">
          <ProjectList title="Nuestros proyectos" items={projects} />
        </div>
      </Container>
    </>
  );
}
