// /pages/blogs/[postSlug].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { connectToMongoDB, client } from '../../lib/mongodb';

interface Post {
  title: string;
  content: string;
  slug: string;
  // Add other fields if needed
}

interface Props {
  post: Post;
}

const BlogPage: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Connect to MongoDB
    const db = await connectToMongoDB();
    const collection = db.collection<{ slug: string }>(process.env.COLLECTION);

    // Fetch data here and create paths dynamically
    const posts = await collection.find({}).toArray();
    const paths = posts.map((post) => ({ params: { postSlug: post.slug } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error connecting to MongoDB or fetching data:', error);
    throw new Error('Internal Server Error');
  }
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  try {
    // Connect to MongoDB
    const db = await connectToMongoDB();
    const collection = db.collection<Post>(process.env.COLLECTION);

    // Fetch specific data for the given postSlug
    const post = await collection.findOne({ slug: params?.postSlug });

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error connecting to MongoDB or fetching data:', error);
    throw new Error('Internal Server Error');
  }
};

export default BlogPage;
