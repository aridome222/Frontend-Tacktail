import { fetchRecipes } from '@/utils/api/fetchRecipes';
import type { RecipeData } from '@/utils/types';
import Image from 'next/image';
import { Card } from './components/Card';
import styles from './page.module.css';

// モックデータ
// const recipesData = [
//   {
//     id: 0,
//     image: '/images/cocktail/screw_driver.jpg',
//     cocktail: 'モヒート',
//     contents: ['ラム', 'ミント', 'ライム', '炭酸水'],
//     level: 'beginner',
//   },
//   {
//     id: 1,
//     image: '/images/cocktail/screw_driver.jpg',
//     cocktail: 'ジン・トニック',
//     contents: ['ジン', 'トニックウォーター'],
//     level: 'beginner',
//   },
//   {
//     id: 2,
//     image: '/images/cocktail/screw_driver.jpg',
//     cocktail: 'ウイスキーサワー',
//     contents: ['ウイスキー', 'レモンジュース', 'シロップ'],
//     level: 'advanced',
//   },
//   {
//     id: 3,
//     image: '/images/cocktail/screw_driver.jpg',
//     cocktail: 'ネグローニ',
//     contents: ['ジン', 'カンパリ', 'スイート・ベルモット'],
//     level: 'advanced',
//   },
//   {
//     id: 4,
//     image: '/images/cocktail/screw_driver.jpg',
//     cocktail: 'ドライマティーニ',
//     contents: ['ジン', 'ドライ・ベルモット'],
//     level: 'advanced',
//   },
//   {
//     id: 5,
//     image: '/images/cocktail/screw_driver.jpg',
//     cocktail: 'スパイシーマルガリータ',
//     contents: ['テキーラ', 'ライムジュース', 'チリパウダー'],
//     level: 'advanced',
//   },
// ];

export default async function Home() {
  const recipesData: Promise<RecipeData[]> = fetchRecipes();
  // 初心者向けと上級者向けのグループ化
  const categories = [
    {
      name: 'まずは飲みやすい一杯から！初心者向け',
      categoryData: (await recipesData).filter((recipe) => recipe.name in Beginner),
    },
    {
      name: 'カクテルアワード優勝への道！上級者向け',
      categoryData: (await recipesData).filter((recipe) => recipe.name in Advanced),
    },
  ];

  // 初級者にオススメのカクテル（IDが 0, 1, 4, 5, 7）
  const Beginner = [
    'モスコミュール',
    'スクリュードライバー',
    'ジンバック',
    'オレンジブロッサム',
    'カルーアミルク',
  ]
  // 上級者にオススメのカクテル（IDが 2, 3, 6, 8, 9）
  const Advanced = [
    'テキーラサンライズ',
    'ロングアイランドアイスティー',
    'キューバリブレ',
    'オーロラ',
    'XYZ'
  ]

  return (
    <>
      <div className={styles.page}>
        {/* トップページの画像 */}
        <div className={styles.imageContainer}>
          <Image src='/images/cocktail/topPage_bar.jpg' alt='topPage_bar' fill priority />
          <p className={styles.overlayText}>Tacktailへようこそ</p>
        </div>

        {/* WEBアプリTacktailの説明 */}
        <h2 className={styles.margin_y}>
          Tacktail<span className={styles.text}>とは？</span>
        </h2>
        <div className={styles.description}>
          <div className={styles.text_medium}>
            <ul>
              <li>バーは好きだけど、時間やお金がかかる…</li>
              <li>自宅でカクテル作ってみたいけど、難しそう…</li>
            </ul>
          </div>
          <div className={styles.margin_y}>
            <p className={styles.text_larger}>そんなあなたに！</p>
            <p>Tacktailはカクテル選びの手間を減らし、ゲーム感覚でカクテルの物知りになれます！</p>
            <p>自宅で楽しみながら、自分だけのカクテルコレクションを作ってみましょう！</p>
          </div>
        </div>

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
                    cocktail={recipe.name}
                    contents={recipe.materials.map(
                      (item) => {
                        return item.name;
                      }
                    )}
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
