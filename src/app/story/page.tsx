import React from 'react';
import styles from './story.module.css';

type Recipe = {
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
};

const Story: React.FC = () => {
  const recipe: Recipe = {
    name: "マティーニ",
    ingredients: [
      "ジン 60ml",
      "ドライ・ベルモット 10ml",
      "レモンピール（飾り）",
    ],
    instructions: [
      "1. ジンとドライ・ベルモットを氷で冷やしたミキシンググラスに入れる。",
      "2. ステアして冷やし、冷やしたグラスに注ぐ。",
      "3. レモンピールを絞って飾る。",
    ],
    image: "/images/martini.jpg",
  };

  return (
    <div className={styles.container}>
      <div className={styles.recipeCard}>
        <img src={recipe.image} alt={recipe.name} className={styles.image} />
        <h1 className={styles.title}>{recipe.name}</h1>
        <div className={styles.ingredients}>
          <h2 className={styles.h2}>材料</h2>
          <ul className={styles.list}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className={styles.ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.instructions}>
          <h2 className={styles.h2}>作り方</h2>
          <ol className={styles.list}>
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className={styles.instruction}>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Story;
