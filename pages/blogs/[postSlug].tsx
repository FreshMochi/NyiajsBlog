// /pages/blogs/[postSlug].tsx

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { connectToMongoDB, client } from '../../lib/mongodb';

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Articles {
  posts: Post[];
}

const BlogPage: NextPage<{ article: Post }> = ({ article }) => {
  const router = useRouter();

  return (
    <div className='bg-blue-800'>
      <h1>Title: {article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await connectToMongoDB();

    const collection = client.db(process.env.DB).collection(process.env.COLLECTION);

    const posts = await collection.find().toArray();

    const paths = posts.map((post) => ({ params: { postSlug: post.slug } }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error('Error fetching dynamic paths:', error);
    throw new Error('Internal Server Error');
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    await connectToMongoDB();
    const collection = client.db(process.env.DB).collection(process.env.COLLECTION);

    const post = await collection.findOne({ slug: params.postSlug });

    if (!post) {
      console.error('Post not found for slug:', params.postSlug);
      throw new Error('Post not found');
    }

    // Convert _id to a string before returning
    const { _id, ...restOfPost } = post;
    const article = { ...restOfPost, _id: _id.toString() };

    return {
      props: {
        article,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    throw new Error('Internal Server Error');
  }
};

export default BlogPage;
