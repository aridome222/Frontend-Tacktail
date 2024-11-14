import Link from 'next/link';
import type React from 'react';
import { CocktailImage } from '../CocktailImage';
import styles from './Card.module.css';

type CardProps = {
  id: string;
  cocktail: string;
  image: string;
  contents: string[];
};

export const Card: React.FC<CardProps> = ({ id, image, cocktail, contents }: CardProps) => {
  const MAX_MATERIAL = 3;

  return (
    <Link href={`/recipes/${id}`} className={styles.card}>
      <div className={styles.imageParent}>
        <CocktailImage backgroundImagePath={image} cocktailName={cocktail} />
      </div>
      <div className={styles.text}>
        <p className={styles.description}>{cocktail}</p>
        <div className={styles.listParent}>
          <ul className={styles.list}>
            {contents.map((item, index) => {
              return (
                index < MAX_MATERIAL && (
                  <li className={styles.material} key={item}>
                    {item}
                  </li>
                )
              );
            })}
          </ul>
          {contents.length >= MAX_MATERIAL && <span className={styles.etc}>etc</span>}
        </div>
      </div>
    </Link>
  );
};
