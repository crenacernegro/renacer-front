"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

import type { Post } from "@/../types";
import { Button } from "@/components/ui/button";
interface PostCard {
  data: Post;
}

const PostCard: React.FC<PostCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/post/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      {/* Image & actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data?.imageUrl}
          alt=""
          fill
          className="aspect-square rounded-md object-cover"
        />
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data.title}</p>
      </div>
      <Button className="w-full " onClick={handleClick} variant="secondary">
        Ver post
      </Button>
    </div>
  );
};

export default PostCard;
