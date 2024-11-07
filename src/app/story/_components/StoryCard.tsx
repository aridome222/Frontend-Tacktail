import Image from "next/image";
import styles from "./StoryCard.module.css";

type StoryCardProps = {
  title: string
  image: string
  recipe: string[]
}

export const StoryCard: React.FC<StoryCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageParent}>
        <Image
          className={styles.image}
          src={props.image}
          alt="image of story mode"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.text}>
        <p className={styles.description}>{props.title}</p>
        <ul className={styles.list}>
          {props.recipe.map((matelial, index) => {
            return (
              <li key={index}>
                {matelial}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
