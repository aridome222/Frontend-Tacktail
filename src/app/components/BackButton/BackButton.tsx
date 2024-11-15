'use client';

import type React from 'react';
import styles from './BackButton.module.css';
import { useRouter } from 'next/navigation';

export const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.buttonContainer}>
      <button type='button' className={styles.button} onClick={() => router.back()}>
        戻る
      </button>
    </div>
  );
};
