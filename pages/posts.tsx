// pages/posts.tsx

import { GetStaticProps, NextPage } from 'next';
import BlogCard, { Post } from '@/components/blogcards';

interface Props {
  posts: Post[];
}

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className='space-y-5 flex-col flex items-center justify-center'>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    // Fetch data from MongoDB
    const response = await fetch('http://localhost:3000/api/posts');
    const data = await response.json();

    // Return data as props
    return {
      props: {
        posts: data.posts || [],
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Return empty array in case of an error
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Blogs;
