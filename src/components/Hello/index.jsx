import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Hello() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    }
    
    fetchData();
  }, []);
  
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

// export default function Hello() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = count;
//     console.log(document.title);
//   });

//   return (
//     <div>
//       <button onClick={() => { setCount(count + 1); }}>Click me</button>
//     </div>
//   );
// }