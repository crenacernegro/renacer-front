"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

import type { Post } from "@/../types";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import { Separator } from "@/components/ui/separator";

interface PostCard {
  data: Post;
}

const PostCard: React.FC<PostCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/post/${data?.id}`);
  };
  const CurrentPageUrl = window.location.href;

  return (
    <>
      <div className="group cursor-pointer space-y-8 rounded-xl border bg-white p-2">
        {/* Image & actions */}
        <div className="relative aspect-square rounded-xl bg-gray-100">
          <Image
            src={data?.imageUrl}
            alt=""
            fill
            className="aspect-square rounded-md object-cover"
            onClick={handleClick}
          />
        </div>
        {/* Description */}
        <div className="relative">
          <p className="text-sm font-bold mb-2 absolute bottom-20 ml-2 text-lime-100">
            {data.title}
          </p>
          <p>{}</p>
          <Separator className="absolute bottom-20 w-2/3 ml-2" />
          <div>
            <FacebookShareButton
              url={CurrentPageUrl}
              hashtag="#ConsejoRenacerNegro"
              className="mr-2"
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton
              url={CurrentPageUrl}
              title="Comparte este post con tus amigos"
              className="mr-2"
            >
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <EmailShareButton
              url={CurrentPageUrl}
              subject="Comparte este post con tus amigos"
              className="mr-2"
            >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
