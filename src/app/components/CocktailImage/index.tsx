import Image from "next/image";
import type React from "react";
import styles from "./CocktailImage.module.css";

type CocktailImageProps = {
  backgroundImagePath: string;
  cocktailName: string;
};

export const CocktailImage: React.FC<CocktailImageProps> = ({
  backgroundImagePath,
  cocktailName,
}: CocktailImageProps) => (
  <div className={styles.container}>
    {/* メインの背景画像 */}
    <Image
      src={backgroundImagePath}
      alt="Background"
      width={100}
      height={100}
      style={{ objectFit: "cover" }}
    />

    {/* メイン画像の右斜め上に配置する画像 */}
    <div className={styles.overlay}>
      <Image
        src="/images/golden_ribbon.png"
        alt="Overlay"
        width={400}
        height={50}
      />
      <p className={styles.cocktailName}>{cocktailName}</p>
    </div>
  </div>
);
