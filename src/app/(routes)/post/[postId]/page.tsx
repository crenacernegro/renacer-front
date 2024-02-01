import Image from "next/image";
import getPost from "../../../../actions/get-post";
import Container from "../../../components/ui/container";
import { format } from "date-fns/format";

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
    <div className="bg-white flex items-center justify-center">
      <div className="mt-28 text-black w-2/3 ml-8">
        <h3 className="mb-4 font-normal text-sm">{dateformatted}</h3>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="font-normal text-md text-justify mt-8">
          Recientemente se llevó a cabo la primera jornada de acercamiento con
          los y las adolescentes y jóvenes desde la línea de fortalecimiento de
          sus habilidades resilientes, especialmente desde su capacidad de
          liderazgo con un enfoque cultural, esto en el marco del proceso de
          implementación del programa Jóvenes Resilientes de USAID, ACDI/VOCA y
          Funof en Santander de Quilichao, Cauca.
          <br />
          <br />
          Por medio de formación integral otorgada desde la co-creación de Funof
          y @somospacificotc , se posibilitó que adolescentes y jóvenes del
          barrio el porvenir y la vereda San Rafael de Santander de Quilichao,
          demostraran sus habilidades y destrezas desde líneas de danzas
          folclóricas, artes plásticas e industrias creativas.
        </p>
        <div className="relative aspect-square rounded-xl bg-gray-100 mt-8 mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default PostPage;
