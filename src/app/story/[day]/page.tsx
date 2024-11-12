import { Card } from '@/app/components/Card';
import Link from 'next/link';
import type React from 'react';
import { StoryTop } from '../_components/StoryTop';
import styles from './StoryDay.module.css';

const StoryDay: React.FC = () => {
  // day指定でレシピを取得
  const MOCK_COCKTAIL = {
    id: 0,
    cocktail: 'ジンバック',
    image: '/images/cocktail/gin_buck.jpg',
    recipe: ['ジン', 'ジンジャーエール'],
    day: 3,
    trivia: '〜ジンってなに？〜',
    description:
      '世界４大スピリッツと呼ばれる中の一つで、独特の鋭い切れ味や口の中に広がる香りを楽しめます。',
  };

  return (
    <>
      <StoryTop />
      <section className={styles.section}>
        <p className={styles.text}>0．カクテル豆知識 {MOCK_COCKTAIL.trivia}</p>
        <p className={styles.text}>{MOCK_COCKTAIL.description}</p>
      </section>
      <section className={styles.section}>
        <div>
          <p className={styles.text}>１．以下の材料を揃えよう</p>
          <ul className={styles.list}>
            {MOCK_COCKTAIL.recipe.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <p className={styles.text}>２．以下のレシピを作成しよう</p>
        <Card
          id={MOCK_COCKTAIL.id}
          image={MOCK_COCKTAIL.image}
          cocktail={MOCK_COCKTAIL.cocktail}
          contents={MOCK_COCKTAIL.recipe}
        />
      </section>
      <section className={styles.section}>
        <p className={styles.text}>３．作成完了ボタンを押そう</p>
        <div className={styles.buttonContainer}>
          <Link href='/story' className={styles.button}>
            作成完了
          </Link>
        </div>
      </section>
    </>
  );
};

export default StoryDay;
