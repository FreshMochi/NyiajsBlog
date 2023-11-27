// "./pages/api/posts.js"

import { connectToMongoDB, client } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;

    // Request validation
    if (!title || !content) {
      return res.status(400).json({ success: false, error: 'Bad Request', message: 'Title and content are required' });
    }

    try {
      // Connect to MongoDB
      await connectToMongoDB();
      console.log('Connected to MongoDB'); // Log connection status

      // Access a specific collection (replace 'exercises' with your actual collection name)
      const collection = client.db().collection("exercises");

      // Insert new post into the collection
      await collection.insertOne({ title, content });

      // Respond with success message
      res.status(201).json({ success: true, message: 'Post created successfully' });
    } catch (error) {
      // Error handling with more details
      console.error('Error creating post in MongoDB:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
  // Do not close the client here; keep the connection open for subsequent requests
}
