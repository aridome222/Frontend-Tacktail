import React from "react";
import styles from "./TriviaCard.module.css";

type TriviaCardProps = {
  mainHeader: string;
  subHeader: string;
  content: string;
};

export const TriviaCard: React.FC<TriviaCardProps> = ({
  mainHeader,
  subHeader,
  content,
}) => {
  return (
    <div className={styles.triviaSection}>
      <div className={styles.triviaHeader}>
        <h3 className={styles.triviaTitle}>{mainHeader}</h3>
        <h3 className={styles.triviaTitle}>{subHeader}</h3>
      </div>
      <div className={styles.triviaContent}>{content}</div>
    </div>
  );
};
