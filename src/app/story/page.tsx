import React from "react";
import { StoryCard } from "./_components/StoryCard";
import { StoryTop } from "./_components/StoryTop";
// import styles from "./story.module.css";

const Story: React.FC = () => {
  const DEFALT_IMAGE = "/images/hatena.png"

  const MOCK_STORY_CLEAR = 2;
  const MOCK_DATA_LIST = [
    {
      "title": "モスコミュールを作ってみよう",
      "image": "/images/cocktail/moscow_mule.jpg",
      "recipe": [
        "ウォッカ", "ジンジャーエール"
      ]
    },
    {
      "title": "スクリュードライバーを作ってみよう",
      "image": "/images/cocktail/screw_driver.jpg",
      "recipe": [
        "ウォッカ", "オレンジジュース"
      ]
    },
    {
      "title": "ジンバックを作ってみよう",
      "image": "/images/cocktail/gin_buck.jpg",
      "recipe": [
        "ジン", "ジンジャーエール"
      ]
    },
    {
      "title": "ロングアイランドアイスティーを作ってみよう",
      "image": "/images/cocktail/long_island_ice_tea.jpg",
      "recipe": [
        "ジン", "ウォッカ", "テキーラ", "ラム", "コアントロー", "コーラ"
      ]
    },
    {
      "title": "モスコミュールを作ってみよう",
      "image": "/images/cocktail/moscow_mule.jpg",
      "recipe": [
        "ウォッカ", "ジンジャーエール"
      ]
    },
    {
      "title": "スクリュードライバーを作ってみよう",
      "image": "/images/cocktail/screw_driver.jpg",
      "recipe": [
        "ウォッカ", "オレンジジュース"
      ]
    },
    {
      "title": "ジンバックを作ってみよう",
      "image": "/images/cocktail/gin_buck.jpg",
      "recipe": [
        "ジン", "ジンジャーエール"
      ]
    },
    {
      "title": "ロングアイランドアイスティーを作ってみよう",
      "image": "/images/cocktail/long_island_ice_tea.jpg",
      "recipe": [
        "ジン", "ウォッカ", "テキーラ", "ラム", "コアントロー", "コーラ"
      ]
    },
  ];

  return (
    <>
      <StoryTop/>
      {MOCK_DATA_LIST.map((item, index) => {
        return (
          <>
            {index < MOCK_STORY_CLEAR &&
              <StoryCard
                {...item}
                isActive
                isClear
                key={index}
              />
            }
            {index == MOCK_STORY_CLEAR &&
              <StoryCard title={item.title}
                image={DEFALT_IMAGE}
                recipe={item.recipe}
                isActive isClear={false}
                key={index}
              />
            }
            {index > MOCK_STORY_CLEAR &&
              <StoryCard
                title={item.title}
                image={DEFALT_IMAGE}
                recipe={item.recipe}
                isActive={false}
                isClear={false}
                key={index}
              />
            }
          </>
        );
      })}
    </>
  );
};

export default Story;
