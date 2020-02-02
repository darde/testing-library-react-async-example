import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Hello() {
  const [posts, setPosts] = useState([]);
  
  
  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const response = await axios.get(BASE_URL);
      if (mounted) {
        console.log(response.data);
        setPosts(response.data);
      }
    }
    fetchData();

    return () => {
      mounted = false;
    }
  }, []);
  console.log('length: ', posts.length);

  if(posts.length === 0) {
    console.log('returning... ');
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul>
        {
          posts.map(
            post => <li key={post.id}>{post.title}</li>
          )
        }
      </ul>
    </div>
  )
}