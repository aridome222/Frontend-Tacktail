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

const Home = async () => {
  const recipesData: RecipeData[] = await fetchRecipes();

  // 初級者にオススメのカクテル（IDが 0, 1, 4, 5, 7）
  const Beginner = [
    'モスコミュール',
    // 'スクリュードライバー',
    // 'ジンバック',
    // 'オレンジブロッサム',
    'カルーアミルク',
  ];
  // 上級者にオススメのカクテル（IDが 2, 3, 6, 8, 9）
  const Advanced = [
    // 'テキーラサンライズ',
    // 'ロングアイランドアイスティー',
    // 'キューバリブレ',
    'オーロラ',
    'XYZ',
  ];

  // 初心者向けと上級者向けのグループ化
  const categories = [
    {
      name: 'まずは飲みやすい１杯を！初心者向け',
      // categoryData: recipesData.filter((recipe) => recipe.name in Beginner),
      categoryData: recipesData.filter((recipe) => Beginner.includes(recipe.name)),
    },
    {
      name: 'カクテルアワード優勝への道！上級者向け',
      // categoryData: recipesData.filter((recipe) => recipe.name in Advanced),
      categoryData: recipesData.filter((recipe) => Advanced.includes(recipe.name)),
    },
  ];

  return (
    <>
      <div className={styles.page}>
        {/* トップページの画像 */}
        <div className={styles.imageContainer}>
          <Image
            src='/images/cocktail/topPage_bar.png'
            alt='topPage_bar'
            fill
            priority
            className={styles.image}
          />
          <p className={styles.overlayText}>Welcome to Tacktail!</p>
        </div>

        {/* WEBアプリTacktailの説明 */}
        {/* <h2 className={styles.h2}>Tacktail</h2> */}
        <div className={styles.container}>
          <div className={styles.description}>
            {/* <div className={styles.margin_y}> */}
            {/* <p className={styles.text_larger}>そんなあなたに！</p> */}
            <p>宅飲みを一段上の領域へ！</p>
            <p>あなたも宅飲みカクテル始めませんか！？</p>
            {/* <div className={styles.text_medium}></div> */}
            {/* </div> */}
          </div>
          <p className={styles.p}>こんな風に思ってる方へ</p>
          <ul className={styles.list}>
            <li>自宅でカクテル作ってみたいけど難しそう…</li>
            <li>専用の道具なんて持ってない…</li>
            <li>何のお酒を揃えれば良いんだろう…</li>
            <li>カクテルって高そう…</li>
          </ul>
          <p className={styles.p}>Tacktail使ってみませんか？</p>
          <ul className={styles.list}>
            <li>分量は比率で記載しているので、目分量で作って大丈夫です</li>
            <li>簡単なカクテルならコップだけで作れます</li>
            <li>段々とお酒を揃えながら楽しめるストーリーモードがあります</li>
            <li>実はカクテル１杯（350ml）あたりの値段は200円前後なんです</li>
          </ul>
        </div>

        {/* 初心者向けと上級者向けにレシピを表示 */}
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className={styles.h3}>{category.name}</h3>
              <div className={styles.cardList}>
                {category.categoryData.map((recipe) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
