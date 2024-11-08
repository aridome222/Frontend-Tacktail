import React from 'react';
import { StoryCard } from './_components/StoryCard';
import { StoryTop } from './_components/StoryTop';

const Story: React.FC = () => {
  const DEFALT_IMAGE = '/images/hatena.png';

  const MOCK_STORY_CLEAR = 2;
  const MOCK_DATA_LIST = [
    {
      title: 'モスコミュールを作ってみよう',
      image: '/images/cocktail/moscow_mule.jpg',
      recipe: ['ウォッカ', 'ジンジャーエール'],
      day: 1,
    },
    {
      title: 'スクリュードライバーを作ってみよう',
      image: '/images/cocktail/screw_driver.jpg',
      recipe: ['ウォッカ', 'オレンジジュース'],
      day: 2,
    },
    {
      title: 'ジンバックを作ってみよう',
      image: '/images/cocktail/gin_buck.jpg',
      recipe: ['ジン', 'ジンジャーエール'],
      day: 3,
    },
    {
      title: 'ロングアイランドアイスティーを作ってみよう',
      image: '/images/cocktail/long_island_ice_tea.jpg',
      recipe: ['ジン', 'ウォッカ', 'テキーラ', 'ラム', 'コアントロー', 'コーラ'],
      day: 4,
    },
    {
      title: 'モスコミュールを作ってみよう',
      image: '/images/cocktail/moscow_mule.jpg',
      recipe: ['ウォッカ', 'ジンジャーエール'],
      day: 5,
    },
    {
      title: 'スクリュードライバーを作ってみよう',
      image: '/images/cocktail/screw_driver.jpg',
      recipe: ['ウォッカ', 'オレンジジュース'],
      day: 6,
    },
    {
      title: 'ジンバックを作ってみよう',
      image: '/images/cocktail/gin_buck.jpg',
      recipe: ['ジン', 'ジンジャーエール'],
      day: 7,
    },
    {
      title: 'ロングアイランドアイスティーを作ってみよう',
      image: '/images/cocktail/long_island_ice_tea.jpg',
      recipe: ['ジン', 'ウォッカ', 'テキーラ', 'ラム', 'コアントロー', 'コーラ'],
      day: 8,
    },
  ];

  return (
    <>
      <StoryTop />
      {MOCK_DATA_LIST.map((item, index) => {
        return (
          <React.Fragment key={item.day}>
            {index < MOCK_STORY_CLEAR && <StoryCard {...item} isActive isClear />}
            {index === MOCK_STORY_CLEAR && (
              <StoryCard
                title={item.title}
                image={DEFALT_IMAGE}
                recipe={item.recipe}
                day={item.day}
                isActive
                isClear={false}
              />
            )}
            {index > MOCK_STORY_CLEAR && (
              <StoryCard
                title={item.title}
                image={DEFALT_IMAGE}
                recipe={item.recipe}
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
