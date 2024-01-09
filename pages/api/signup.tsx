  // "./pages/api/signup.tsx"
  import { NextApiRequest, NextApiResponse } from 'next';
  import { connectToMongoDB, client } from '../../lib/mongodb';
  import nodemailer from 'nodemailer'; // Import Nodemailer

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

  export default async function signup(
    req: NextApiRequest, 
    res: NextApiResponse) {

    try {
      await connectToMongoDB();

      const collection = client!.db(process.env.DB as string).collection(process.env.SIGNUP as string);

      if (req.method === 'POST') {
        const { email, fname, lname } = req.body as PostRequestBody;
        // Request validation
        if (!email || !fname || !lname) {
          return res.status(400).json({
            success: false,
            error: 'Bad Request',
            message: 'Email, First Name, and Last Name are required',
          });
        } else {
          // Insert new post into the collection
          await collection.insertOne({ email, fname, lname });
          

          // Send a thank you email
          const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
              user: process.env.SMTP_EMAIL,
              pass: process.env.SMTP_PASS,
            }
          });


          const mailOptions = {
            from: 'nxiong984@gmail.com', // Sender's email address
            to: email, // Recipient's email address
            subject: `Signin up for Nyiaj's Blog`,
            text: `Thank you ${fname} for signing up to Nyiaj's Blog`,
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Email error:', error);
            } else {
              console.log('Email sent:', info.response);
            }
          });
          res.status(201).json({ success: true, message: 'Post created successfully' });
        }
      }

    } catch (error: any) {
      // Error handling with more details
      console.error('Error:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
    } finally {
      // Do not close the client here; keep the connection open for subsequent requests
    }
  }
