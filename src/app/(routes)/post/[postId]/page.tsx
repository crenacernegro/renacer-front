import getPost from "../../../../actions/get-post";
import Container from "../../../components/ui/container";
import Image from "next/image";

export const revalidate = 0;
interface PostPageProps {
  params: {
    postId: string;
  };
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const post = await getPost(params.postId);

  if (!post) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="p-0 mb-80">
          <div className="w-full flex mt-20">
            <Image
              src={post.images[0].url}
              alt={post.title}
              width={1280}
              height={720}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="absolute h-80 w-3/4 ml-12 bg-lime-100 -mt-16 rounded-xl md:-mt-48">
            <div className="ml-4 text-lime-950 text-md font-bold p-4 text-center md:text-lg">
              <p className="md:text-2xl">{post.title}</p>
            </div>
            <div className="ml-4 text-sm p-4">{post.content}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default PostPage;
