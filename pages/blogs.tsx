// pages/blogs.tsx

import { InferGetStaticPropsType, NextPage } from 'next';
import BlogCard from '@/components/blogcards';
import Form from '../components/form'
import style from '../styles/blog.module.css'

interface PostsApiResponse {
  posts: {
    title: string;
    slug: string;
    content: string;
    date: number;
  }[];
}

export const getStaticProps = async () => {
  try {
    // Simulate a delay of 2 seconds before fetching data
    /* await new Promise((resolve) => setTimeout(resolve, 500000)); */

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
    <div className={style.blogContainer}>

    <div className={style.postContainer}>
      {posts.map((post) => (
        <BlogCard
        key={post.title} 
        date={post.date}
        title={post.title} 
        content={truncateText(post.content, maxContentLength)}
        slug={post.slug} />
        ))
      }
    </div>
      <Form />
    </div>
  );
};

export default Blogs;
