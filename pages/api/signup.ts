// "./pages/api/posts.ts"
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToMongoDB, client } from '../../lib/mongodb';

interface ProcessEnv {
    DB: string;
    SIGNUP: string;
  }
// Define the expected structure of the request body
interface PostRequestBody {
    email: string;
    fname: string;
    lname: string;
  }
  
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connect to MongoDB
    await connectToMongoDB();

    const collection = client!.db(process.env.DB as string).collection(process.env.SIGNUP as string);

    switch (req.method) {
      case 'POST':
        const { email, fname, lname } = req.body as PostRequestBody;

        // Request validation
        if (!email || !fname || !lname) {
          return res.status(400).json({
            success: false,
            error: 'Bad Request',
            message: 'Title, content, and slug are required',
          });
        }

        // Insert new post into the collection
        await collection.insertOne({ email, fname, lname });

        // Respond with success message
        res.status(201).json({ success: true, message: 'Post created successfully' });
        break;

      // Add cases for other HTTP methods if needed

      default:
        res.status(405).json({ success: false, error: 'Method Not Allowed', message: 'Invalid HTTP method' });
    }
  } catch (error: any) {
    // Error handling with more details
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
  } finally {
    // Do not close the client here; keep the connection open for subsequent requests
  }
}
