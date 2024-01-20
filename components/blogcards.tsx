// ./components/blogcards.tsx

import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
    title: string;
    slug: string;
    content: string;
    date: number;
}

const BlogCard: NextPage<Props> = ({ title, content, slug, date  }) => {
  // Render the component
  return (
    <div className='relative w-fit
    flex-col w-3/4 justify-center  max-h-max h-30 p-2 py-12 rounded-md'>
      <h2 className='relative text-3xl font-bold flex items-center justify-center'>{title}</h2>
      <p>{}</p>
      <p className='mt-5'>{content}</p>
      <Link href={`/blogs/${slug}`} passHref>
        {/* Use passHref to pass href to the Link */}
        <button className='bg-zinc-600 rounded-lg p-2 absolute bottom-0 right-10'>Read more</button>
      </Link>
    </div>
  );
};

export default BlogCard;
