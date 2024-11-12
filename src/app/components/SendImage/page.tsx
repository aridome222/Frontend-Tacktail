'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type React from 'react';
import { downloadStorage, uploadStorage } from '../../../lib/supabase/storage';
import supabase from '../../../utils/supabase';
import styles from './SendImage.module.css';

type SendImageProps = {
  cocktailId: number;
  username: string;
};

export const SendImage = ({ cocktailId, username }: SendImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>('/images/secret.jpg'); // 初期画像を secret.jpg
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // 画像をダウンロードして URL を設定
    const fetchImage = async () => {
      try {
        const url = await downloadStorage({
          bucketName: 'images',
          cocktailId,
          username,
        });
        if (url) {
          setImageUrl(url); // 画像が存在する場合はその URL を設定
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageUrl('/images/secret.jpg'); // エラー時にはデフォルト画像を設定
      }
    };

    fetchImage();
  }, [cocktailId, username]);

  const handleUploadStorage = async (file: File) => {
    if (!file) return;

    // 画像アップロード処理
    const path = await uploadStorage({
      file,
      bucketName: 'images',
      cocktailId,
      username,
    });

    if (path) {
      const { data } = supabase.storage.from('images').getPublicUrl(path);

      // URL が同じだと更新前の画像が表示されたままなので、タイムスタンプをつけて状態変数を更新
      const imageUrlWithTimestamp = `${data.publicUrl}?t=${new Date().getTime()}`;
      setImageUrl(imageUrlWithTimestamp);
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
        <Image src={imageUrl} priority alt='Uploaded image' width={300} height={300} />
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
