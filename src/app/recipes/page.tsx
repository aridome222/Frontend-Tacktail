import { Card } from '../components/Card';
import styles from './Recipes.module.css';

// モックデータ
const recipesData = [
  {
    id: 0,
    image: '/images/cocktail/screw_driver.jpg',
    cocktail: 'モヒート',
    contents: ['ラム', 'ミント', 'ライム', '炭酸水'],
  },
  {
    id: 1,
    image: '/images/cocktail/screw_driver.jpg',
    cocktail: 'ジンバック',
    contents: ['ジン', 'レモン', 'ジンジャーエール'],
  },
  {
    id: 2,
    image: '/images/cocktail/screw_driver.jpg',
    cocktail: 'ロングアイランドアイスティー',
    contents: ['ジン', 'ウォッカ', 'ホワイトラム', 'テキーラ', 'コアントロー', 'コーラ'],
  },
];

const Recipes = () => {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.h1}>レシピ一覧</h1>
        <div className={styles.cardList}>
          {recipesData.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              cocktail={recipe.cocktail}
              contents={recipe.contents}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
