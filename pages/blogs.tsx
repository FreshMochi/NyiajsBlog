// pages/posts.tsx

import { InferGetStaticPropsType, NextPage } from 'next';
import BlogCard from '@/components/blogcards';
import Form from '../components/form'

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

    // Reverse the posts array
    const reversedPosts = posts.reverse();

    // Return data as props
    return {
      props: {
        posts: reversedPosts || [],
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

const truncateText = (text: string, length: number) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  } else {
    return text;
  }
};


const Blogs: NextPage<Props> = ({ posts }) => {
  // Define the maximum number of characters you want to display
  const maxContentLength = 200; // for example, 100 characters
  
  return (
    <div className='space-y-5 w-screen flex-col flex items-center justify-center'>
      {posts.map((post) => (
        <BlogCard
         key={post.title} 
         title={post.title} 
         content={truncateText(post.content, maxContentLength)}
         slug={post.slug} />
      ))
      }
      <Form />
    </div>
  );
};

export default Blogs;
