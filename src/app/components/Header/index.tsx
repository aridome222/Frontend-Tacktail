import Link from 'next/link';
import type React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href='/story' className={styles.link}>
            Story
          </Link>
          <Link href='/recipes' className={styles.link}>
            Cocktails
          </Link>
        </div>
      </header>
    </>
  );
};
