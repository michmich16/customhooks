import { useState, useEffect } from 'react';

export function useImages() {
  const [images, setImages] = useState([]);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const image = import.meta.glob("./public/*.(jpg|png|jpeg)");
        setImages(image.map((image) => ({
          url: `/${image.name}`, 
        })));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return images;
};
