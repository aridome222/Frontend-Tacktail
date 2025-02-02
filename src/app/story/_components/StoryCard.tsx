import { CocktailImage } from '@/app/components/CocktailImage';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import styles from './StoryCard.module.css';

type StoryCardProps = {
  cocktail: string;
  image: string;
  materials: string[];
  day: number;
  isActive: boolean;
  isClear: boolean;
};

export const StoryCard: React.FC<StoryCardProps> = (props) => {
  const MAX_MATERIAL = 3;

  return (
    <Link
      href={`/story/${props.day}`}
      className={`${styles.card} ${props.isActive ? styles.active : styles.deactive}`}
    >
      <div className={styles.imageParent}>
        <CocktailImage backgroundImagePath={props.image} cocktailName={`${props.day}日目`} />
      </div>
      <div className={styles.text}>
        <p className={styles.description}>{`${props.cocktail}を作ってみよう`}</p>
        <div className={styles.listParent}>
          <ul className={styles.list}>
            {props.materials.map((material, index) => {
              return (
                index < MAX_MATERIAL && (
                  <li className={styles.material} key={material}>
                    {material}
                  </li>
                )
              );
            })}
          </ul>
          {props.materials.length >= MAX_MATERIAL && <span className={styles.etc}>etc</span>}
        </div>
      </div>
      {props.isClear && (
        <div className={styles.clearParent}>
          <Image
            className={styles.clear}
            src='/images/clear_gold.png'
            alt='clear image'
            width={100}
            height={30}
            priority
          />
        </div>
      )}
    </Link>
  );
};
