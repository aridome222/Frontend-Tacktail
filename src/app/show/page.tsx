'use client';

import { ImageUploader } from '@/app/components/ImageUploader/page';
import { useState } from 'react';

const Image = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleSetImage = (urls: string[]) => {
    setImageUrls(urls);
  };

  return (
    <div>
      <ImageUploader setImage={handleSetImage} />
      {/* Optionally render the uploaded images */}
      <div>
        {imageUrls.map((url, index) => (
          <Image key={index} src={url} alt={`Uploaded ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Image;
