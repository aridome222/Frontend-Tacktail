'use client';

import { sendUserStory } from '@/utils/api/sendUserStory';
import { useRouter } from 'next/navigation';
import type React from 'react';
import styles from './CompleteButton.module.css';

type CompleteButtonProps = {
  token: string;
};

export const CompleteButton: React.FC<CompleteButtonProps> = ({ token }) => {
  const router = useRouter();

  const handleClick = () => {
    sendUserStory(token);
    router.push('/story');
  };

  return (
    <button type='button' className={styles.button} onClick={handleClick}>
      作成完了
    </button>
  );
};
