import { fetchRecipes } from '@/utils/api/fetchRecipes';
import type { RecipeData } from '@/utils/types';
import { Card } from '../components/Card';
import styles from './Recipes.module.css';

const Recipes = async () => {
  const recipesData: RecipeData[] = await fetchRecipes();
  console.log(recipesData[0].id)
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.h1}>レシピ一覧</h1>
        <div className={styles.cardList}>
          {recipesData.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              image={recipe.image === '' ? '/images/hatena.png' : recipe.image}
              cocktail={recipe.name}
              contents={recipe.materials.map((item) => {
                return item.name;
              })}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
