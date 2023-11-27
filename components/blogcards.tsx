// ./components/blogcards.tsx

import { NextPage } from 'next';
import Link from 'next/link';

export interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  post: Post;
}

const BlogCard: NextPage<Props> = ({ post }) => {
  return (
    <div className='relative flex-col w-1/2 justify-center  m-2 h-40 bg-zinc-900 p-2 rounded-md'>
        <h2 className='relative text-3xl font-bold  flex items-center justify-center'>{post.title}</h2>
        <p className='mt-5'>{post.content}</p>
            <Link href={'/blogs/' + post.slug} className='w-max block'>
                <button className='bg-zinc-600 rounded-lg p-2 absolute bottom-0 right-10'>Read more</button>

            </Link>
    </div>
  );
};

export default BlogCard;