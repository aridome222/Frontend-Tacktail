'use client';

// import Link from 'next/link';
import styles from './CompleteButton.module.css';
import { sendUserStory } from '@/utils/api/sendUserStory';
import type { UserStoryData } from '@/utils/types';
import type React from 'react';
import { redirect, useRouter } from 'next/navigation';
import { auth } from '@/auth/auth';

export const CompleteButton: React.FC = () => {
  const router = useRouter();

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    alert('text');
    event.preventDefault();

    const session = await auth();
    if (!session?.user) redirect('/story');
    const token = session.user.sessionToken;

    console.log(token);
    const result: UserStoryData = await sendUserStory(token);
    console.log(result);
    // router.refresh();
    router.push('/story');
  };

  return (
    <button type='button' className={styles.button} onClick={() => handleClick}>
      作成完了
    </button>
  );
};
