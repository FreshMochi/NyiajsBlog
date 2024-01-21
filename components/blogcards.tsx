// ./components/blogcards.tsx

import { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/blog.module.css'

interface Props {
    title: string;
    slug: string;
    content: string;
    date: number;
}

const BlogCard: NextPage<Props> = ({ title, content, slug, date  }) => {
  // Render the component
  return (
    <div className={styles.blogCardContainer}>
      <h2 className='relative text-3xl font-bold flex items-center justify-center'>{title}</h2>
      <p>{}</p>
      <p className='mt-5'>{content}</p>
      <Link href={`/blogs/${slug}`} passHref>
        {/* Use passHref to pass href to the Link */}
        <button className='bg-zinc-600 rounded-lg p-2 absolute bottom-3 right-10'>Read more</button>
      </Link>
    </div>
  );
};

export default BlogCard;
