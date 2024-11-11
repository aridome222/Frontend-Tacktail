'use client';

import { ImageInput } from '../ImageInput/page';
import type React from 'react';
import { useState, useRef } from 'react';
import styles from './SendImageForm.module.css';

const IMAGE_ID = 'image';

export const SendImageForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 添付画像の状態を管理する状態変数
  const [imageFile, setImageFile] = useState<File | null>(null);

  const selectFile = () => {
    if (!fileInputRef.current) return;
    // ローカルフォルダーから画像選択のダイアログが表示される。
    fileInputRef.current.click();
  };

  // 添付画像が変化したときの処理
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      const targetFile = e.currentTarget.files[0];
      setImageFile(targetFile);
    }
  };

  return (
    <form className={styles.container}>
      <div className={styles.inputField} onClick={selectFile} role='presentation'>
        画像をアップロード
        {/* ダミーインプット: 見えない */}
        <ImageInput fileInputRef={fileInputRef} onChange={handleFileChange} id={IMAGE_ID} />
      </div>

      {/* キャンセルボタン */}
      <div className={styles.buttonGroup}>
        <button type='button'>× キャンセル</button>
        <button type='submit'>画像を送信</button>
      </div>
    </form>
  );
};
