import React, { useState, useEffect } from 'react';
import GetPhotos from '../../repositories/unsplash_repository';
import './styles.css';

function App() {
  const [images, setImages] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const fetchedImages = await GetPhotos();
      setImages(fetchedImages);
    };
    fetchData();
    console.log('use effect!');
  },[]);

  if (images.length === 0) {
    return <span data-testid="loading">Loading...</span>
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Images from Unsplash</h1>
      </header>
      <div className="wrapper">
        {
          images.length > 0 && (
            <ul>
              {
                images.map(image => (
                  <li key={image.id}>
                    <img src={image.urls.thumb} alt={image.alt_description} />
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>
  );
}

export default App;
