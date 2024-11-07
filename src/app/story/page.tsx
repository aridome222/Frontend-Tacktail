import React from "react";
import { StoryCard } from "./_components/StoryCard";
import { StoryTop } from "./_components/StoryTop";
// import styles from "./story.module.css";

const Story: React.FC = () => {
  const MOCK_DATA_LIST = [
    {
      "title": "モスコミュールを作ってみよう",
      "image": "/images/story_top.png",
      "recipe": [
        "ウォッカ", "ジンジャーエール"
      ]
    },
    {
      "title": "モスコミュールを作ってみよう",
      "image": "/images/story_top.png",
      "recipe": [
        "ウォッカ", "ジンジャーエール"
      ]
    },
    {
      "title": "モスコミュールを作ってみよう",
      "image": "/images/story_top.png",
      "recipe": [
        "ウォッカ", "ジンジャーエール"
      ]
    },
    {
      "title": "モスコミュールを作ってみよう",
      "image": "/images/story_top.png",
      "recipe": [
        "ウォッカ", "ジンジャーエール"
      ]
    },
  ]

  return (
    <>
      <StoryTop/>
      {MOCK_DATA_LIST.map((item, index) => {
        return (
          <StoryCard {...item} key={index} />
        );
      })}
    </>
  );
};

export default Story;
