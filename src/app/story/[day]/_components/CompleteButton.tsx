'use client';

// import Link from 'next/link';
import styles from './CompleteButton.module.css';
import { sendUserStory } from '@/utils/api/sendUserStory';
// import type { UserStoryData } from '@/utils/types';
import type React from 'react';
import { useRouter } from 'next/navigation';
// import { auth } from '@/auth/auth';

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
