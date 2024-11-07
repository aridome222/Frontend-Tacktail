import Image from "next/image";
import styles from "./StoryCard.module.css";

type StoryCardProps = {
  title: string
  image: string
  recipe: string[]
}

export const StoryCard: React.FC<StoryCardProps> = (props) => {
  const MAX_MATERIAL = 3;
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
        <div className={styles.listParent}>
          <ul className={styles.list}>
            {props.recipe.map((material, index) => {
              return (
                <>
                  {index < MAX_MATERIAL &&
                    <li className={styles.material} key={index}>
                      {material}
                    </li>
                  }
                </>
              );
            })}
          </ul>
          {props.recipe.length >= MAX_MATERIAL && <span className={styles.etc}>etc</span>}
        </div>
      </div>
    </div>
  );
};
