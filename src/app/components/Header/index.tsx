import Link from 'next/link';
import type React from 'react';
import styles from './Header.module.css';
import { LoginButton } from './_components/LoginLink';
import { auth } from '@/auth/auth';

export const Header: React.FC = async () => {
  const session = await auth();

  return (
    <>
      <header className={styles.header}>
        <Link href='/' className={styles.link}>
          Tacktail
        </Link>
        <div className={styles.container}>
          <Link href='/story' className={styles.link}>
            Story
          </Link>
          <Link href='/recipes' className={styles.link}>
            Cocktails
          </Link>
          <LoginButton session={session} />
        </div>
      </header>
    </>
  );
};
