import React from "react";
import { StoryCard } from "./_components/StoryCard";
import { StoryTop } from "./_components/StoryTop";
// import styles from "./story.module.css";

const Story: React.FC = () => {
  return (
    <>
      <StoryTop />
      <StoryCard />
    </>
  );
};

export default Story;
