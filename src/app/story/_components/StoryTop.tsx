import Image from 'next/image';
import type React from 'react';
import styles from './StoryTop.module.css';

export const StoryTop: React.FC = () => {
  return (
    <div className={styles.top}>
      <div className={styles.text}>
        <h1 className={styles.title}>Story Mode</h1>
        <p className={styles.description}>必要な材料を買って</p>
        <p className={styles.description}>指定されたお酒を作ってみよう！</p>
      </div>
      <div className={styles.imageParent}>
        <Image
          className={styles.image}
          src='/images/story_top.png'
          alt='image of story mode'
          fill
          priority
        />
      </div>
    </div>
  );
};
