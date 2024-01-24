import getPost from "../../../../actions/get-post";
import Container from "../../../components/ui/container";
import { format } from "date-fns/format";
import Image from "next/image";

export const revalidate = 0;
interface PostPageProps {
  params: {
    postId: string;
  };
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const post = await getPost(params.postId);
  const dateformatted = format(new Date(post.createdAt), "dd/MM/yyyy");

  if (!post) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="mt-28 text-black w-2/3 ml-8">
          <h3 className="mb-4">{dateformatted}</h3>
          <h1 className="font-bold text-3xl">{post.title}</h1>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={400}
          height={400}
          className="mt-8 p-4 m-4 w-full ml-2 border-2 rounded-xl m"
          objectFit="responsive"
        />
        <div className="mt-22">
          <h1 className="ml-8 font-semibold">Entradas recientes</h1>
        </div>
      </Container>
    </div>
  );
};
export default PostPage;
