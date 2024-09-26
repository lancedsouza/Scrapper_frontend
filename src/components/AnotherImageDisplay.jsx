import React, { useEffect, useState } from 'react';

function AnotherImageDisplay() {
  const [imageSrc, setImageSrc] = useState('');

  const fetchImage = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/analyze_data3/analyze_data3'); // Replace with your endpoint
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageSrc(url);

      // Optionally open image in a new window
      window.open(url, '_blank');

    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl" onClick={fetchImage}>
        Click Me
      </button>
     
    </div>
  );
}

export default AnotherImageDisplay;
