import { Card } from '@/app/components/Card';
// import { fetchCocktailByDay } from '@/utils/api/fetchCocktailByDay';
// import type { CocktailData } from '@/utils/types';
import Link from 'next/link';
import { StoryTop } from '../_components/StoryTop';
import styles from './StoryDay.module.css';
import { MOCK_COCKTAIL_ID_LIST } from '../page';
import { fetchRecipe } from '@/utils/api/fetchRecipe';
import type { RecipeData } from '@/utils/types';

// const cocktail = {
//   id: '1',
//   cocktail: 'モスコミュール',
//   image: '/images/cocktail/moscow_mule.jpg',
//   recipe: ['ウォッカ', 'ジンジャーエール'],
//   day: 1,
//   trivia: '〜モスコミュールの由来〜',
//   description:
//     'モスコミュールは1940年代にアメリカで人気が出たカクテルで、ウォッカをベースにしたジンジャーエールの爽やかさが特徴です。',
// };

// day指定でレシピを取得
const MOCK_TRIVIA_LIST = [
  {
    day: 1,
    trivia: '〜カクテルの定義〜',
    description:
      'お酒に限らず、何かしらの液体と液体を混ぜて作った飲み物のことを指します。ソフトドリンクやシロップ、果物の果汁だけで作るノンアルコールカクテルも存在します。',
  },
  {
    day: 2,
    trivia: '〜ウォッカは世界４大スピリッツの１つ〜',
    description:
      '蒸留酒全般のことをスピリッツと言い、様々なカクテルで用いられます。中でもウォッカは癖の少ない味わいから、割る飲み物に味わいが大きく依存します。お好きなソフトドリンクで割って、ご賞味ください。',
  },
  {
    day: 3,
    trivia: '〜カクテル言葉〜',
    description:
      '花言葉のようにカクテル言葉も存在します。例えば、ウォッカにオレンジジュースを混ぜると、飲みやすくもアルコール度数が高くなることから、スクリュードライバーには「あなたに心を奪われました」というカクテル言葉があります。',
  },
  {
    day: 4,
    trivia: '〜ジンは世界４大スピリッツの１つ〜',
    description:
      'ジンは爽やかな香りと風味で、スピリッツの中でもカクテルのベースとして高い人気を誇ります。近年は日本でも様々なクラフトジンが製造されています。',
  },
  {
    day: 5,
    trivia: '〜ロングカクテルとショートカクテル〜',
    description:
      'カクテル１杯を美味しく飲み切る時間によって、ロングカクテルとショートカクテルに分類されます。ロングカクテルには氷や炭酸が使われており、長時間適温が維持されます。対してショートカクテルは短い時間でぬるくなってしまうため、短い時間で飲み切れるような分量で提供されます。',
  },
  {
    day: 6,
    trivia: '〜グレナンデンシロップ〜',
    description:
      'グレナンデンシロップはザクロの果汁と砂糖から作るシロップを指します。鮮やかな赤い色合いから、カクテルの底に沈めて少し混ぜることで、カクテルに鮮やかなグラデーションを付けることができます。',
  },
  {
    day: 7,
    trivia: '〜お酒はお菓子作りにも使われます〜',
    description:
      '料理酒というものが存在するように、お酒の用途は様々です。コアントローというお酒はオレンジの香りが楽しめることから、チョコレートとの相性が良く、お菓子作りでも大活躍します。',
  },
  {
    day: 8,
    trivia: '〜ロングアイランドアイスティー？〜',
    description:
      'ロングアイランドアイスティーという名称とは裏腹に紅茶は一滴も使われておらず、複数のスピリッツやコーラなどを用いることで、見た目や味を紅茶に近づけています。飲みやすいがアルコール度数はとても高いため、「レディキラーカクテル」という異名を持ちます。',
  },
];

// const MOCK_TRIVIA_LIST = [
//   {
//     day: 1,
//     trivia: '〜モスコミュールの由来〜',
//     description:
//       'モスコミュールは1940年代にアメリカで人気が出たカクテルで、ウォッカをベースにしたジンジャーエールの爽やかさが特徴です。',
//   },
//   {
//     day: 2,
//     trivia: '〜スクリュードライバーの由来〜',
//     description:
//       'スクリュードライバーは1950年代にアメリカで人気を集めたカクテルで、シンプルなウォッカとオレンジジュースの組み合わせが特徴です。',
//   },
//   {
//     day: 3,
//     trivia: '〜ジンバックの由来〜',
//     description:
//       'ジンは世界４大スピリッツと呼ばれる蒸留酒の一つで、独特の鋭い切れ味と香りを楽しめます。ジンバックはそのジンをベースにした爽やかなカクテルです。',
//   },
//   {
//     day: 4,
//     trivia: '〜ロングアイランドアイスティーの由来〜',
//     description:
//       'ロングアイランドアイスティーは、アメリカのロングアイランド地方で誕生したカクテルで、複数のスピリッツとコーラが特徴的です。',
//   },
//   {
//     day: 5,
//     trivia: '〜モスコミュールの由来〜',
//     description:
//       'モスコミュールは1940年代にアメリカで人気を集めたカクテルで、ウォッカとジンジャーエールをベースにした爽快感のあるドリンクです。',
//   },
//   {
//     day: 6,
//     trivia: '〜スクリュードライバーの由来〜',
//     description:
//       'スクリュードライバーはウォッカとオレンジジュースを混ぜたシンプルなカクテルですが、その飲みやすさから非常に人気があります。',
//   },
//   {
//     day: 7,
//     trivia: '〜ジンってなに？〜',
//     description:
//       'ジンは香り高いスピリッツで、ジンバックはそのジンとジンジャーエールを組み合わせた、爽やかな味わいのカクテルです。',
//   },
//   {
//     day: 8,
//     trivia: '〜ロングアイランドアイスティーの由来〜',
//     description:
//       'ロングアイランドアイスティーは多くのスピリッツを使った複雑な味わいが特徴で、コーラの甘さとスピリッツのバランスが魅力的です。',
//   },
// ];

const StoryDay = async ({ params }: { params: Promise<{ day: string }> }) => {
  const { day } = await params;
  // TODO: dayを引数とするfetchCocktailByDay関数を呼び出して、カクテル情報を取得・表示する
  const cocktailID = MOCK_COCKTAIL_ID_LIST[Number(day) - 1];

  const recipeData: RecipeData = await fetchRecipe(cocktailID);

  return (
    <>
      <StoryTop />
      <section className={styles.section}>
        <p className={styles.text}>０．カクテル豆知識</p>
        <p>{MOCK_TRIVIA_LIST[Number(day) - 1].trivia}</p>
        <p>{MOCK_TRIVIA_LIST[Number(day) - 1].description}</p>
      </section>
      <section className={styles.section}>
        <div>
          <p className={styles.text}>１．以下の材料を揃えよう</p>
          <ul className={styles.list}>
            {recipeData.materials.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <p className={styles.text}>２．以下のレシピを作成しよう</p>
        <Card
          id={recipeData.id}
          image={recipeData.image === '' ? '/images/hatena.png' : recipeData.image}
          cocktail={recipeData.name}
          contents={recipeData.materials.map((material) => {
            return material.name;
          })}
        />
      </section>
      <section className={styles.section}>
        <p className={styles.text}>３．作成完了ボタンを押そう</p>
        <div className={styles.buttonContainer}>
          <Link href='/story' className={styles.button}>
            作成完了
          </Link>
        </div>
      </section>
    </>
  );
};

export default StoryDay;
