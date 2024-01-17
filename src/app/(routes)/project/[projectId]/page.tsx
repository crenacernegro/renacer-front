import getProject from "../../../../actions/get-project";
import getProjects from "../../../../actions/get-projects";

import Container from "../../../components/ui/container";
import Gallery from "../../../components/gallery";
import ProjectList from "../components/project-list";

export const revalidate = 0;
interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const project = await getProject(params.projectId);
  const suggestedProjects = await getProjects();

  if (!project) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={project.images} />
          </div>
          <hr className="my-10" />
          <ProjectList title="Related Items" items={suggestedProjects} />
        </div>
      </Container>
    </div>
  );
};
export default ProjectPage;
