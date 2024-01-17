"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

import type { Project } from "@/../types";
interface ProjectCard {
  data: Project;
}

const ProjectCard: React.FC<ProjectCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      {/* Image & actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images?.[0]?.url ?? ""}
          alt=""
          fill
          className="aspect-square rounded-md object-cover"
        />
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
