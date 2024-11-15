import { fetchRecipes } from '@/utils/api/fetchRecipes';
import type { RecipeData } from '@/utils/types';
import Image from 'next/image';
import { Card } from './components/Card';
import styles from './page.module.css';
import { auth } from '@/auth/auth';
import { fetchRecipesWithAuth } from '@/utils/api/fetchRecipesWithAuth';

const Home = async () => {
  const session = await auth();
  let recipesData: RecipeData[];
  if (session?.user?.sessionToken) {
    const token: string = session.user.sessionToken;
    recipesData = await fetchRecipesWithAuth(token);
  } else {
    recipesData = await fetchRecipes();
  }

  // ノンアルコールカクテル（IDが 0, 1, 4, 5, 7）
  const Nonalcoholic = [
    'シンデレラ',
    'シャーリーテンプル',
    'フルーツパンチ',
    // 'プッシーキャット',
  ];
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
      name: '展示会中は流石にノンアルコールで',
      // categoryData: recipesData.filter((recipe) => recipe.name in Advanced),
      categoryData: recipesData.filter((recipe) => Nonalcoholic.includes(recipe.name)),
    },
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
        <div className={styles.container}>
          <div className={styles.description}>
            <p className={styles.row}>宅飲みを一段上の領域へ！</p>
            <p className={styles.row}>あなたも宅飲みカクテル始めませんか！？</p>
          </div>
          <p className={styles.p}>こんな風に思ってる方へ</p>
          <ul className={styles.list}>
            <li className={styles.li}>自宅でカクテル作ってみたいけど難しそう…</li>
            <li className={styles.li}>専用の道具なんて持ってない…</li>
            <li className={styles.li}>何のお酒を揃えれば良いんだろう…</li>
            <li className={styles.li}>カクテルって高そう…</li>
          </ul>
          <p className={styles.p}>Tacktail使ってみませんか？</p>
          <ul className={styles.list}>
            <li className={styles.li}>分量は比率で記載しているので、目分量で作って大丈夫です</li>
            <li className={styles.li}>簡単なカクテルならコップだけで作れます</li>
            <li className={styles.li}>段々とお酒を揃えながら楽しめるストーリーモードがあります</li>
            <li className={styles.li}>実はカクテル１杯（350ml）あたりの値段は200円前後なんです</li>
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
