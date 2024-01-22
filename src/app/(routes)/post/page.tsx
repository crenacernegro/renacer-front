import getPosts from "../../../actions/get-posts";
import Container from "../../components/ui/container";
import PostList from "./components/post-list";

export const revalidate = 0;

export default async function ProjectsPage() {
  const posts = await getPosts();
  return (
    <>
      <Container>
        <div className="mb-4 mt-24 grid grid-cols-1 gap-4 p-8">
          <PostList title="Noticias del consejo" items={posts} />
        </div>
      </Container>
    </>
  );
}
