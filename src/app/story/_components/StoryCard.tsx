import Image from "next/image";
import styles from "./StoryCard.module.css";

export const StoryCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageParent}>
        <Image
          className={styles.image}
          src="/images/story_top.png"
          alt="image of story mode"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.description}>モスコミュールを作ってみよう</h2>
      </div>
    </div>
  );
};
