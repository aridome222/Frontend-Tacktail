import type React from "react";
import { RangeSlider } from "./_components/RangeSlider";
import styles from "./recipe.module.css"; // CSSモジュールのインポート

const Recipe: React.FC = () => {
  return (
    <>
      <div className={styles.page}>
        {/* ページタイトル */}
        <h1>カクテルレシピページ</h1>

        {/* カクテル画像 */}
        <div className={styles.imageContainer}>
          <img src="/images/react.png" alt="カクテル画像" />
        </div>

        {/* カクテル情報 */}
        <h2 className={styles.headline}>モスコミュール</h2>
        <div className={styles.text}>
          <p>費用目安: 500円程度</p>
          <p>
            モスコミュールはウォッカベースのカクテルで、ジンジャーエールとライムの爽やかな味わいが特徴です。
          </p>
        </div>

        {/* 材料 */}
        <h3 className={styles.headline}>材料</h3>
        <div className={styles.ingredient}>
          <div>
            <p>ウォッカ</p>
            <RangeSlider />
          </div>
          <div>
            <p>オレンジジュース</p>
            <RangeSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
