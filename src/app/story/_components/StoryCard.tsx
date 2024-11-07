import Image from "next/image";
import styles from "./StoryCard.module.css";

export const StoryCard: React.FC = () => {
  // const MOCK_CLEAR = {
  //   clear_number: 1,
  // }

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
      {MOCK_DATA_LIST.map((item, index) => {
        return (
          <div className={styles.card} key={index}>
            <div className={styles.imageParent}>
              <Image
                className={styles.image}
                src={item.image}
                alt="image of story mode"
                width={100}
                height={100}
                priority
              />
            </div>
            <div className={styles.text}>
              <p className={styles.description}>{item.title}</p>
              <ul className={styles.list}>
                {item.recipe.map((matelial, index) => {
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
      })}
    </>
  );
};
