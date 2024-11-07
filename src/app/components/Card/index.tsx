import type React from 'react';
import { CocktailImage } from '../CocktailImage';
import styles from './Card.module.css';

type CardProps = {
  heading: string;
  contents: string[];
};

export const Card: React.FC<CardProps> = ({ heading, contents }: CardProps) => {
  return (
    <>
      <div className={styles.parent}>
        <CocktailImage backgroundImagePath='/images/robot_and_hogeta.jpeg' cocktailName={heading} />
        <div className={styles.mediaBody}>
          <h1 className={styles.heading}>{heading}</h1>
          {contents.map((item) => (
            <ul className={styles.contents} key={item}>
              {item}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
