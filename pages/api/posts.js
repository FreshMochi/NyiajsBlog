// "./pages/api/posts.js"

import { connectToMongoDB, client } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    await connectToMongoDB();
    console.log('Connected to MongoDB'); // Log connection status

    const collection = client.db().collection("exercises");

    if (req.method === 'POST') {
      const { title, content } = req.body;

      // Request validation
      if (!title || !content) {
        return res.status(400).json({ success: false, error: 'Bad Request', message: 'Title and content are required' });
      }

      // Insert new post into the collection
      await collection.insertOne({ title, content });

      // Respond with success message
      res.status(201).json({ success: true, message: 'Post created successfully' });
    } else if (req.method === 'GET') {
      // Handle GET request to retrieve posts
      const posts = await collection.find({}).toArray();
      res.status(200).json({ success: true, posts });
    } else {
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
  } catch (error) {
    // Error handling with more details
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
  }
  // Do not close the client here; keep the connection open for subsequent requests
}