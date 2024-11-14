import { Card } from '@/app/components/Card';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { StoryTop } from '../_components/StoryTop';
import styles from './StoryDay.module.css';

const cocktail = {
  id: 1,
  cocktail: 'モスコミュール',
  image: '/images/cocktail/moscow_mule.jpg',
  recipe: ['ウォッカ', 'ジンジャーエール'],
  day: 1,
  trivia: '〜モスコミュールの由来〜',
  description:
    'モスコミュールは1940年代にアメリカで人気が出たカクテルで、ウォッカをベースにしたジンジャーエールの爽やかさが特徴です。',
};

// day指定でレシピを取得
const MOCK_COCKTAIL = [
  {
    id: 1,
    cocktail: 'モスコミュール',
    image: '/images/cocktail/moscow_mule.jpg',
    recipe: ['ウォッカ', 'ジンジャーエール'],
    day: 1,
    trivia: '〜モスコミュールの由来〜',
    description:
      'モスコミュールは1940年代にアメリカで人気が出たカクテルで、ウォッカをベースにしたジンジャーエールの爽やかさが特徴です。',
  },
  {
    id: 2,
    cocktail: 'スクリュードライバー',
    image: '/images/cocktail/screw_driver.jpg',
    recipe: ['ウォッカ', 'オレンジジュース'],
    day: 2,
    trivia: '〜スクリュードライバーの由来〜',
    description:
      'スクリュードライバーは1950年代にアメリカで人気を集めたカクテルで、シンプルなウォッカとオレンジジュースの組み合わせが特徴です。',
  },
  {
    id: 3,
    cocktail: 'ジンバック',
    image: '/images/cocktail/gin_buck.jpg',
    recipe: ['ジン', 'ジンジャーエール'],
    day: 3,
    trivia: '〜ジンバックの由来〜',
    description:
      'ジンは世界４大スピリッツと呼ばれる蒸留酒の一つで、独特の鋭い切れ味と香りを楽しめます。ジンバックはそのジンをベースにした爽やかなカクテルです。',
  },
  {
    id: 4,
    cocktail: 'ロングアイランドアイスティー',
    image: '/images/cocktail/long_island_ice_tea.jpg',
    recipe: ['ジン', 'ウォッカ', 'テキーラ', 'ラム', 'コアントロー', 'コーラ'],
    day: 4,
    trivia: '〜ロングアイランドアイスティーの由来〜',
    description:
      'ロングアイランドアイスティーは、アメリカのロングアイランド地方で誕生したカクテルで、複数のスピリッツとコーラが特徴的です。',
  },
  {
    id: 5,
    cocktail: 'モスコミュール',
    image: '/images/cocktail/moscow_mule.jpg',
    recipe: ['ウォッカ', 'ジンジャーエール'],
    day: 5,
    trivia: '〜モスコミュールの由来〜',
    description:
      'モスコミュールは1940年代にアメリカで人気を集めたカクテルで、ウォッカとジンジャーエールをベースにした爽快感のあるドリンクです。',
  },
  {
    id: 6,
    cocktail: 'スクリュードライバー',
    image: '/images/cocktail/screw_driver.jpg',
    recipe: ['ウォッカ', 'オレンジジュース'],
    day: 6,
    trivia: '〜スクリュードライバーの由来〜',
    description:
      'スクリュードライバーはウォッカとオレンジジュースを混ぜたシンプルなカクテルですが、その飲みやすさから非常に人気があります。',
  },
  {
    id: 7,
    cocktail: 'ジンバック',
    image: '/images/cocktail/gin_buck.jpg',
    recipe: ['ジン', 'ジンジャーエール'],
    day: 7,
    trivia: '〜ジンってなに？〜',
    description:
      'ジンは香り高いスピリッツで、ジンバックはそのジンとジンジャーエールを組み合わせた、爽やかな味わいのカクテルです。',
  },
  {
    id: 8,
    cocktail: 'ロングアイランドアイスティー',
    image: '/images/cocktail/long_island_ice_tea.jpg',
    recipe: ['ジン', 'ウォッカ', 'テキーラ', 'ラム', 'コアントロー', 'コーラ'],
    day: 8,
    trivia: '〜ロングアイランドアイスティーの由来〜',
    description:
      'ロングアイランドアイスティーは多くのスピリッツを使った複雑な味わいが特徴で、コーラの甘さとスピリッツのバランスが魅力的です。',
  },
];

const StoryDay = ({ params }: { params: { day: string } }) => {
  const { day } = params;

  return (
    <>
      <StoryTop />
      <section className={styles.section}>
        <p className={styles.text}>
          ０．カクテル豆知識<span className={styles.num_text}>{day}</span>
        </p>
        <p>{cocktail.trivia}</p>
        <p>{cocktail.description}</p>
      </section>
      <section className={styles.section}>
        <div>
          <p className={styles.text}>１．以下の材料を揃えよう</p>
          <ul className={styles.list}>
            {cocktail.recipe.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <p className={styles.text}>２．以下のレシピを作成しよう</p>
        <Card
          id={cocktail.id}
          image={cocktail.image}
          cocktail={cocktail.cocktail}
          contents={cocktail.recipe}
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
