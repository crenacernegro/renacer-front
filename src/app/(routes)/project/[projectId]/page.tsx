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
        <div className="p-0 mb-80">
          <div className="w-full flex mt-20">
            <Image
              src={project.images[0].url}
              alt={project.name}
              width={1280}
              height={720}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="absolute h-80 w-3/4 ml-12 bg-lime-100 -mt-16 rounded-xl md:-mt-48">
            <div className="ml-4 text-lime-950 text-md font-bold p-4 text-center md:text-lg">
              <p className="md:text-2xl">{project.name}</p>
            </div>
            <div className="ml-4 text-sm p-4">{project.description}</div>
            <div className="ml-8 font-medium text-sm p-0">
              Municipios: {project.location}
            </div>
            <div className="font-medium ml-8 text-sm p-0">
              Cantidad de participantes: {project.numberOfParticipants}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProjectPage;
