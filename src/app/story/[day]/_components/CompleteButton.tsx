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

export const CompleteButton: React.FC = (props: CompleteButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    console.log(props.token);
    sendUserStory(props.token);
    // router.refresh();
    router.push('/story');
  };

  return (
    <button type='button' className={styles.button} onClick={handleClick}>
      作成完了
    </button>
  );
};
