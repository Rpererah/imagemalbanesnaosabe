import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('http://134.235.147.127:3001/api/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Galeria de Fotos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Foto ${index + 1}`}
            style={{ width: '200px', margin: '10px' }}
          />
        ))}

      </div>
    </div>
  );
};

export default PhotoGallery;
