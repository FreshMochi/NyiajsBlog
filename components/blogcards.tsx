// ./components/blogcards.tsx

import { NextPage } from 'next';

export interface Post {
  index: number;
  title: string;
  content: string;
}

interface Props {
  post: Post;
}

const BlogCard: NextPage<Props> = ({ post }) => {
  return (
    <div className='flex-col w-2/3 justify-center h-auto m-2' >
      <h2 className='text-3xl font-bold underline flex items-center justify-center'>{post.title}</h2>
      <p className='m-6'>{post.content}</p>
    </div>
  );
};

export default BlogCard;