// pages/posts.tsx

import { NextPage } from 'next';
import { useEffect, useState } from 'react';

interface Post {
  title: string;
  content: string;
}

interface Props {}

const Blogs: NextPage<Props> = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data.posts || []); // Ensure posts is defined or set it to an empty array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

//test

export default Blogs;
