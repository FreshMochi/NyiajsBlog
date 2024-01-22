// "./lib/mongodb.ts"
import { MongoClient, Db } from 'mongodb';

const MONGODB_URI: string = process.env.MONGODB_URI || 'default-value';

if (MONGODB_URI !== undefined) {
  // Now TypeScript knows that MONGODB_URI is a string
  // Do something with MONGODB_URI
} else {
  // Handle the case where MONGODB_URI is undefined
  throw new Error('MONGODB_URI is not defined');
}

// Declare a type for the extended MongoClient instance
interface CustomMongoClient extends MongoClient {
  isConnected?: () => boolean;
}

// Declare a variable to hold the MongoDB client instance
let client: CustomMongoClient | undefined;

// Export the MongoDB client and URI for external use
export { client, MONGODB_URI };

// Function to connect to MongoDB and return the database instance
export async function connectToMongoDB(): Promise<Db | undefined> {
  try {
    // Check if the client is not initialized or not connected
    if (!client || !(client.isConnected && client.isConnected())) {
      // If not connected, create a new MongoClient instance
      client = new MongoClient(MONGODB_URI, {});

      // Connect to the MongoDB server
      await client.connect();
      //console.log('Connected to MongoDB');
    }

    // Return the database instance associated with the connected client
    return client?.db();
  } catch (error) {
    // If an error occurs during the connection attempt, log the error
    console.error('Error connecting to MongoDB:', error);
  }
}
