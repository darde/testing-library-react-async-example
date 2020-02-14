import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GetPhotos from '../../repositories/unsplash_repository';
import './styles.css';

function App({ term }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImages = await GetPhotos(term);
      setImages(fetchedImages);
    };
    fetchData();
  }, [term]);

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

App.propTypes = {
  term: PropTypes.string,
};

App.defaultProps = {
  term: null,
};

export default App;
