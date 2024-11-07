import { Card } from '../components/Card';
import styles from './Recipes.module.css';

// モックデータ
const recipesData = [
  {
    id: 0,
    heading: 'モヒート',
    contents: ['ラム', 'ミント', 'ライム', '炭酸水'],
  },
  {
    id: 1,
    heading: 'ジンバック',
    contents: ['ジン', 'レモン', 'ジンジャーエール'],
  },
  {
    id: 2,
    heading: 'ロングアイランドアイスティー',
    contents: ['ジン', 'ウォッカ', 'ホワイトラム', 'テキーラ', 'コアントロー', 'コーラ'],
  },
];

const Recipes = () => {
  return (
    <>
      <h1>レシピ一覧</h1>
      <div className={styles.cardList}>
        {recipesData.map((recipe) => (
          <Card key={recipe.id} heading={recipe.heading} contents={recipe.contents} />
        ))}
      </div>
    </>
  );
};

export default Recipes;
