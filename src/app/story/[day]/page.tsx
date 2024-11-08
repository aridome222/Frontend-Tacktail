import type React from 'react';
import { StoryTop } from '../_components/StoryTop';
import styles from './StoryDay.module.css';
import { Card } from '@/app/components/Card';

const StoryDay: React.FC = () => {
  // day指定でレシピを取得
  const MOCK_COCKTAIL = {
    id: 0,
    cocktail: 'ジンバック',
    image: '/images/cocktail/gin_buck.jpg',
    recipe: ['ジン', 'ジンジャーエール'],
    day: 3,
  };

  return (
    <>
      <StoryTop />
      <section className={styles.section}>
        <div>
          <p className={styles.text}>以下の材料を揃えよう</p>
          <ul className={styles.list}>
            {MOCK_COCKTAIL.recipe.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </section>
      <section>
        <p className={styles.text}>以下のレシピを作成しよう</p>
        <Card
          id={MOCK_COCKTAIL.id}
          image={MOCK_COCKTAIL.image}
          cocktail={MOCK_COCKTAIL.cocktail}
          contents={MOCK_COCKTAIL.recipe}
        />
      </section>
    </>
  );
};

export default StoryDay;
