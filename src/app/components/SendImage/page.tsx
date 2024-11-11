'use client';

import { useState } from 'react';
import Image from 'next/image';
import { uploadStorage } from '../../../lib/supabase/storage';
import supabase from '../../../utils/supabase';

type SendImageProps = {
  cocktailId: number;
  username: string;
};

export const SendImage = ({ cocktailId, username }: SendImageProps) => {
  const [path, setPathName] = useState<string | undefined>();

  const handleUploadStorage = async (file: File) => {
    if (!file) return;

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

  return (
    <>
      <label htmlFor='file-upload'>
        <span>アップロードする</span>
        <input
          id='file-upload'
          name='file-upload'
          type='file'
          className='sr-only'
          accept='image/png, image/jpeg'
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
              const file = files[0];
              handleUploadStorage(file); // ファイルがある場合にアップロード処理を呼び出す
            }
          }}
        />
        {path && <Image src={path} alt='Uploaded image' width={300} height={300} />}
      </label>
    </>
  );
};
