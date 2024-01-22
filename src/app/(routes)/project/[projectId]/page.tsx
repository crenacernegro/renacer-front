import getProject from "../../../../actions/get-project";

import Container from "../../../components/ui/container";
import Image from "next/image";

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
        <div className="p-0 mb-60">
          <div className="w-full flex">
            <Image
              src={project.images[0].url}
              alt={project.name}
              width={1280}
              height={720}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="absolute h-80 w-2/3 ml-32 bg-lime-100 -mt-24">
            <div className="ml-24 text-lime-950 text-4xl font-bold mt-8">
              {project.name}
            </div>
            <div className="absolute ml-24 mt-24">{project.description}</div>
            <div className="absolute ml-24 mt-36 font-semibold">
              Municipios: {project.location}
            </div>
            <div className="absolute ml-24 mt-44 font-semibold">
              Cantidad de participantes: {project.numberOfParticipants}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProjectPage;
