// "use client";

import type React from "react";
import styles from "./recipe.module.css"; // CSSモジュールのインポート

const Recipe: React.FC = () => {
  return (
    <>
      <div className={styles.page}>
        <h1>カクテルレシピページ</h1>

        {/* カクテルの基本情報 */}
        <div className={styles.description}>
          <div className={styles.imageContainer}>
            <img
              src="/images/react.png"
              alt="ステップ1の画像"
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <h2>モスコミュール</h2>
            <p>費用目安: 500円程度</p>
            <p>
              説明:
              モスコミュールはウォッカベースのカクテルで、ジンジャーエールとライムの爽やかな味わいが特徴です。
            </p>
          </div>
        </div>

        {/* 材料と比率 */}
        <h3>材料と比率</h3>
        <div className={styles.rangeSliderContainer}>
          <div className={styles.rangeSliderItem}>
            <label htmlFor="vodka-slider">ウォッカ</label>
            0
            <input
              id="vodka-slider"
              type="range"
              min="0"
              max="10"
              step="1"
              value={5}
              list="range-list"
            />
            10
            <datalist id="range-list">
              <option value="0" />
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
              <option value="6" />
              <option value="7" />
              <option value="8" />
              <option value="9" />
              <option value="10" />
            </datalist>
          </div>
          <div className={styles.rangeSliderItem}>
            <label htmlFor="orange-juice-slider">オレンジジュース</label>
            0
            <input
              id="orange-juice-slider"
              type="range"
              min="0"
              max="10"
              step="1"
              value={5}
              list="range-list2"
            />
            10
            <datalist id="range-list2">
              <option value="0" />
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
              <option value="6" />
              <option value="7" />
              <option value="8" />
              <option value="9" />
              <option value="10" />
            </datalist>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
