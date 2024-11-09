import styles from "./page.module.css";
import { Card } from "./components/Card";

// モックデータ
const recipesData = [
  {
    id: 0,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "モヒート",
    contents: ["ラム", "ミント", "ライム", "炭酸水"],
    category: "フルーティー系",
  },
  {
    id: 1,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "ジン・トニック",
    contents: ["ジン", "トニックウォーター"],
    category: "ドライ系",
  },
  {
    id: 2,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "ウイスキーサワー",
    contents: ["ウイスキー", "レモンジュース", "シロップ"],
    category: "サワー系",
  },
  {
    id: 3,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "ネグローニ",
    contents: ["ジン", "カンパリ", "スイート・ベルモット"],
    category: "ビター系",
  },
  {
    id: 4,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "マルガリータ",
    contents: ["テキーラ", "ライムジュース", "オレンジリキュール"],
    category: "サワー系",
  },
  {
    id: 5,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "カンパリソーダ",
    contents: ["カンパリ", "ソーダ"],
    category: "ビター系",
  },
  {
    id: 6,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "ドライマティーニ",
    contents: ["ジン", "ドライ・ベルモット"],
    category: "ドライ系",
  },
  {
    id: 7,
    image: "/images/cocktail/screw_driver.jpg",
    cocktail: "スパイシーマルガリータ",
    contents: ["テキーラ", "ライムジュース", "チリパウダー"],
    category: "スパイシー系",
  },
];

export default function Home() {
  // 各カテゴリをグループ化
  const categories = [
    {
      name: "ドライ系",
      categoryData: recipesData.filter(
        (recipe) => recipe.category === "ドライ系"
      ),
    },
    {
      name: "サワー系",
      categoryData: recipesData.filter(
        (recipe) => recipe.category === "サワー系"
      ),
    },
    {
      name: "ビター系",
      categoryData: recipesData.filter(
        (recipe) => recipe.category === "ビター系"
      ),
    },
    {
      name: "フルーティー系",
      categoryData: recipesData.filter(
        (recipe) => recipe.category === "フルーティー系"
      ),
    },
    {
      name: "スパイシー系",
      categoryData: recipesData.filter(
        (recipe) => recipe.category === "スパイシー系"
      ),
    },
  ];

  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.h1}>トップページ</h1>
        <h2 className={styles.h2}>オススメのカクテル</h2>

        {/* 各カテゴリごとにレシピを表示 */}
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <div key={category.name}>
              <h3>{category.name}</h3>
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
