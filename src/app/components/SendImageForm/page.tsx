'use client';

import { ImageInput } from '../ImageInput/page';
import Image from 'next/image';
import type React from 'react';
import { useState, useRef } from 'react';
import styles from './SendImageForm.module.css';

const IMAGE_ID = 'image';

export const SendImageForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [imageSource, setImageSource] = useState('');

  const selectFile = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  // ファイルが読み込まれた際に、画像データを抽出する処理
  const generateImageSource = (files: FileList) => {
    const file = files[0];
    const fileReader = new FileReader();
    setFileName(file.name);
    fileReader.onload = () => {
      setImageSource(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  // 添付画像が変化したときの処理
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length <= 0) return;

    generateImageSource(files); // img要素のsrc属性に渡す画像データを生成
    setImageFile(files[0]);
  };

  console.log(imageSource);

  return (
    <form className={styles.container}>
      <div className={styles.inputField} onClick={selectFile} role='presentation'>
        {/* 画像があれば選択画像をプレビューし、なければ「+ 画像をアップロード」を表示 */}
        {fileName ? (
          <Image src={imageSource} width={300} height={300} alt='アップロード画像' />
        ) : (
          '+ 画像をアップロード'
        )}
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
