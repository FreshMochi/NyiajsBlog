// /pages/blogs/[postSlug].tsx

// Import necessary Next.js and MongoDB-related modules
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { connectToMongoDB, client } from '../../lib/mongodb';
import style from '../../styles/slug.module.css'
import FormattedText from '../../components/FormattedText';

// Define the structure of a post
interface Post {
  title: string;
  content: string;
  date: number;
  slug: string;
}


// Define the main page component for /blogs/[postSlug]
const BlogPage: NextPage<{ article: Post }> = ({ article }) => {
  // Function to convert newline characters into paragraph tags
  const dateObject = new Date(article.date);

  // Format the date as needed for display...
  const displayDate = dateObject.toLocaleDateString('en-US', { /* options */ });


  return (
    <div className={style.blogContainer}>
      <div>
      <h1 className={style.blogTitle}>{article.title}</h1>
      </div>
      <div>
        {displayDate}
      </div>
      <div className={style.blogContent}>
      <FormattedText content={article.content} />
      </div>
    </div>
  );
};


// Implement the function to generate static paths during build time
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Connect to MongoDB
    await connectToMongoDB();
    
    // Access the MongoDB collection
    const collection = client!.db(process.env.DB).collection(process.env.COLLECTION as string);

    // Fetch all posts from the collection
    const posts = await collection.find().toArray();

    // Map posts to create an array of paths for static site generation
    const paths = posts.map((post) => ({ params: { postSlug: post.slug } }));

    // Return the generated paths and specify fallback behavior
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    // Handle errors during the path generation process
    console.error('Error fetching dynamic paths:', error);
    throw new Error('Internal Server Error');
  }
};

// Implement the function to fetch data for a specific post during build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    // Connect to MongoDB
    await connectToMongoDB();

    // Access the MongoDB collection
    const collection = client!.db(process.env.DB).collection(process.env.COLLECTION as string);

    // Fetch the specific post based on the provided slug
    const post = await collection.findOne({ slug: params?.postSlug }, 
      { projection: { title: 1, content: 1, date: 1, slug: 1, } });

      // Log the fetched post
    console.log('Fetched post:', post);

    // If the post is not found, log an error and throw an exception
    if (!post) {
      console.error('Post not found for slug:', params?.postSlug);
      throw new Error('Post not found');
    }

    // Convert the MongoDB _id and the Date to a string before returning the data as props
    const { _id, date, ...restOfPost } = post;
    const article = { 
      ...restOfPost, 
      _id: _id.toString(),
      date: date.toISOString() // Convert the Date to an ISO string
    };

    // Return the fetched post data as props along with revalidation settings
    return {
      props: {
        article,
      },
      revalidate: 10,
    };
  } catch (error) {
    // Handle errors during the data fetching process
    console.error('Error fetching article:', error);
    throw new Error('Internal Server Error');
  }
};

// Export the main page component
export default BlogPage;