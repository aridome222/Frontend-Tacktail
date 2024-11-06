// "use client";

import type React from "react";
import styles from "./recipe.module.css"; // CSSモジュールのインポート

const Recipe: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1>カクテルレシピページ</h1>

      {/* カクテルの基本情報 */}
      <section>
        <h2>カクテル名: モスコミュール</h2>
        <p>調理時間: 約5分</p>
        <p>費用目安: 500円程度</p>
        <p>
          説明:
          モスコミュールはウォッカベースのカクテルで、ジンジャーエールとライムの爽やかな味わいが特徴です。
        </p>
      </section>

      {/* 作り方の手順（画像付き） */}
      <section>
        {/* デモ画像（本番では適切な画像パスを指定） */}
        <img
          src="../../favicon.ico"
          alt="ステップ1の画像"
          className={styles.stepImage}
        />
      </section>

      {/* 材料と比率 */}
      <section>
        <h3>材料と比率</h3>
        <p>以下の比率で混ぜてください。</p>
        <div>
          <label htmlFor="vodka-slider">ウォッカ: 5/10</label>
          <input
            id="vodka-slider"
            type="range"
            min="0"
            max="10"
            step="1"
            value={5}
          />
        </div>
        <div>
          <label htmlFor="orange-juice-slider">オレンジジュース: 5/10</label>
          <input
            id="orange-juice-slider"
            type="range"
            min="0"
            max="10"
            step="1"
            value={5}
          />
        </div>
      </section>
    </div>
  );
};

export default Recipe;
