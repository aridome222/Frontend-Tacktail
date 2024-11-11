'use client';

import { useState, useRef } from 'react';
import type React from 'react';
import Image from 'next/image';
import { uploadStorage } from '../../../lib/supabase/storage';
import supabase from '../../../utils/supabase';
import styles from './SendImage.module.css';

type SendImageProps = {
  cocktailId: number;
  username: string;
};

export const SendImage = ({ cocktailId, username }: SendImageProps) => {
  const [path, setPathName] = useState<string | undefined>();
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleUploadStorage = async (file: File) => {
    if (!file) return;

    // const { data, error } = await supabase.storage.from('images').download(path);

    // 画像アップロード処理
    const { path } = await uploadStorage({
      file,
      bucketName: 'images',
      cocktailId,
      username,
    });

    if (path) {
      const { data } = supabase.storage.from('images').getPublicUrl(path);
      setPathName(data.publicUrl);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      handleUploadStorage(file);
    }
  };

  return (
    <>
      <div className={styles.sendImageContainer}>
        <input
          id='file-upload'
          name='file-upload'
          type='file'
          className={styles.fileInput}
          accept='image/png, image/jpeg'
          onChange={handleFileChange}
          ref={inputFileRef}
        />
        {/* 選択した画像がない場合は黒い背景で白いはてなの画像を出す */}
        {path ? (
          <Image src={path} alt='Uploaded image' width={300} height={300} />
        ) : (
          <Image src='/images/secret.jpg' alt='secret cocktail image' width={300} height={300} />
        )}
        <button
          id='fillSelect'
          type='button'
          className={styles.button}
          onClick={() => inputFileRef.current?.click()}
        >
          画像を選択
        </button>
      </div>
    </>
  );
};
