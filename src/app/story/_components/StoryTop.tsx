import Image from "next/image";
import styles from "./StoryTop.module.css";

export const StoryTop: React.FC = () => {
  return (
    <div className={styles.top}>
      <div className={styles.text}>
        <h1>Story Mode!</h1>
      </div>
      <div className={styles.imageParent}>
        <Image
          className={styles.image}
          src="/images/story_top.png"
          alt="image of story mode"
          fill
          priority
        />
      </div>
    </div>
  );
}