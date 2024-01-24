import ProjectCard from "../components/post-card";
import { Post } from "@/../types";
import NoResults from "../components/no-results";

interface PostListProps {
  title: string;
  items: Post[];
}

const PostList: React.FC<PostListProps> = ({ title, items }) => {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-center">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {items.map((item) => (
          <ProjectCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
