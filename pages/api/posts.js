// "./pages/api/posts.js"
import { connectToMongoDB, client } from process.env.SOURCEFILE;

export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    await connectToMongoDB();

    const collection = client.db(process.env.DB).collection(process.env.COLLECTION);

    switch (req.method) {
      case 'GET':
        // Handle GET request to retrieve posts
        const posts = await collection.find({}).toArray();
        res.status(200).json({ success: true, posts });
        break;

      default:
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
        break;
    }
  } catch (error) {
    // Error handling with more details
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
  }
  // Do not close the client here; keep the connection open for subsequent requests
}
