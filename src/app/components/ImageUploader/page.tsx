'use client';

import { storage } from '@/lib/firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import type React from 'react';
import { useRef } from 'react';

type ImageUploaderProps = {
  setImage: (urls: string[]) => void;
  acceptTypes?: string;
  maxFiles?: number;
};

export const ImageUploader = ({
  setImage,
  acceptTypes = '.png,.jpeg,.jpg',
  maxFiles = 1,
}: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files).slice(0, maxFiles);
    if (files.length < 1) return;

    const urls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const storageRef = ref(storage, `images/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);
        console.log('Uploaded a blob or file!', snapshot);
        try {
          const url = await getDownloadURL(storageRef);
          urls.push(url);
        } catch (urlError) {
          console.error('Error getting download URL:', urlError);
        }
      } catch (uploadError) {
        console.error('Error uploading file:', uploadError);
      }
    }

    setImage(urls);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div>
        <input type='file' onChange={onImageUpload} accept={acceptTypes} />
        <button type='button' onClick={() => triggerFileInput}>
          Upload Image
        </button>
      </div>
    </>
  );
};
