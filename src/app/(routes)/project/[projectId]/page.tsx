import getProject from "../../../../actions/get-project";

import Container from "../../../components/ui/container";
import Gallery from "../../../components/gallery";

export const revalidate = 0;
interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const project = await getProject(params.projectId);

  if (!project) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <h2 className="text-2xl ml-8">Imágenes del projecto</h2>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={project.images} />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProjectPage;
