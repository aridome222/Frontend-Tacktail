import React from 'react';
import { StoryCard } from './_components/StoryCard';
import { StoryTop } from './_components/StoryTop';
import { auth } from '@/auth/auth';
import { redirect } from 'next/navigation';

const Story: React.FC = async () => {
  const DEFALT_IMAGE = '/images/hatena.png';

  const MOCK_STORY_CLEAR = 2;
  const MOCK_DATA_LIST = [
    {
      cocktail: 'モスコミュール',
      image: '/images/cocktail/moscow_mule.jpg',
      materials: ['ウォッカ', 'ジンジャーエール'],
      day: 1,
    },
    {
      cocktail: 'スクリュードライバー',
      image: '/images/cocktail/screw_driver.jpg',
      materials: ['ウォッカ', 'オレンジジュース'],
      day: 2,
    },
    {
      cocktail: 'ジンバック',
      image: '/images/cocktail/gin_buck.jpg',
      materials: ['ジン', 'ジンジャーエール'],
      day: 3,
    },
    {
      cocktail: 'ロングアイランドアイスティー',
      image: '/images/cocktail/long_island_ice_tea.jpg',
      materials: ['ジン', 'ウォッカ', 'テキーラ', 'ラム', 'コアントロー', 'コーラ'],
      day: 4,
    },
    {
      cocktail: 'モスコミュール',
      image: '/images/cocktail/moscow_mule.jpg',
      materials: ['ウォッカ', 'ジンジャーエール'],
      day: 5,
    },
    {
      cocktail: 'スクリュードライバー',
      image: '/images/cocktail/screw_driver.jpg',
      materials: ['ウォッカ', 'オレンジジュース'],
      day: 6,
    },
    {
      cocktail: 'ジンバック',
      image: '/images/cocktail/gin_buck.jpg',
      materials: ['ジン', 'ジンジャーエール'],
      day: 7,
    },
    {
      cocktail: 'ロングアイランドアイスティー',
      image: '/images/cocktail/long_island_ice_tea.jpg',
      materials: ['ジン', 'ウォッカ', 'テキーラ', 'ラム', 'コアントロー', 'コーラ'],
      day: 8,
    },
  ];

  const session = await auth();
  if (!session?.user) redirect('/login');

  return (
    <>
      <StoryTop />
      {MOCK_DATA_LIST.map((item, index) => {
        return (
          <React.Fragment key={item.day}>
            {index < MOCK_STORY_CLEAR && <StoryCard {...item} isActive isClear />}
            {index === MOCK_STORY_CLEAR && (
              <StoryCard
                cocktail={item.cocktail}
                image={DEFALT_IMAGE}
                materials={item.materials}
                day={item.day}
                isActive
                isClear={false}
              />
            )}
            {index > MOCK_STORY_CLEAR && (
              <StoryCard
                cocktail={item.cocktail}
                image={DEFALT_IMAGE}
                materials={item.materials}
                day={item.day}
                isActive={false}
                isClear={false}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Story;
