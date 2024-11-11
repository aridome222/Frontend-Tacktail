import styles from "./page.module.css";
import { Card } from "./components/Card";
import Image from "next/image";

// モックデータ
const recipesData = [
  {
    id: 0,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "モヒート",
    contents: ["ラム", "ミント", "ライム", "炭酸水"],
    level: "beginner",
  },
  {
    id: 1,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "ジン・トニック",
    contents: ["ジン", "トニックウォーター"],
    level: "beginner",
  },
  {
    id: 2,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "ウイスキーサワー",
    contents: ["ウイスキー", "レモンジュース", "シロップ"],
    level: "advanced",
  },
  {
    id: 3,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "ネグローニ",
    contents: ["ジン", "カンパリ", "スイート・ベルモット"],
    level: "advanced",
  },
  {
    id: 4,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "ドライマティーニ",
    contents: ["ジン", "ドライ・ベルモット"],
    level: "advanced",
  },
  {
    id: 5,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "スパイシーマルガリータ",
    contents: ["テキーラ", "ライムジュース", "チリパウダー"],
    level: "advanced",
  },
];

export default function Home() {
  // 初心者向けと上級者向けのグループ化
  const categories = [
    {
      name: "まずは飲みやすい一杯から！初心者向け",
      categoryData: recipesData.filter((recipe) => recipe.level === "beginner"),
    },
    {
      name: "カクテルアワード優勝への道！上級者向け",
      categoryData: recipesData.filter((recipe) => recipe.level === "advanced"),
    },
  ];

  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.h1}>トップページ</h1>
        <h2 className={styles.h2}>オススメのカクテル</h2>

        {/* 初心者向けと上級者向けにレシピを表示 */}
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className={styles.margin_bottom}>{category.name}</h3>
              <div className={styles.cardList}>
                {category.categoryData.map((recipe) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
