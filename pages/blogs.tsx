// pages/posts.tsx

import { InferGetStaticPropsType, NextPage } from 'next';
import BlogCard from '@/components/blogcards';

interface PostsApiResponse {
  posts: {
    title: string;
    slug: string;
    content: string;
  }[];
}

export const getStaticProps = async () => {
  try {
    // Simulate a delay of 2 seconds before fetching data
    /* await new Promise((resolve) => setTimeout(resolve, 5000)); */

    // Fetch data from MongoDB
    const response = await fetch('http://localhost:3000/api/posts');
    const { posts }: PostsApiResponse = await response.json();

    // Return data as props
    return {
      props: {
        posts: posts || [],
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

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className='space-y-5 flex-col flex items-center justify-center'>
      {posts.map((post) => (
        <BlogCard
         key={post.title} 
         title={post.title} 
         content={post.content}
         slug={post.slug} />
      ))}
    </div>
  );
};

export default Blogs;
