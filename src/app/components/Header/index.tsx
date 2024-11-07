import styles from './Header.module.css';
import Link from 'next/link';
import type React from 'react';

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href='/' className={styles.link}>
            Story
          </Link>
          <Link href='/' className={styles.link}>
            Cocktails
          </Link>
          <Link href='/' className={styles.link}>
            Post
          </Link>
        </div>
      </header>
    </>
  );
};
