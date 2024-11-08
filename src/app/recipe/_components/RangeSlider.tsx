"use client";

import type React from "react";
import { useEffect, useState } from "react";
import styles from "./RangeSlider.module.css";

export const RangeSlider: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(2);

  console.log(selectedIndex);

  // 長方形のクリック処理
  const handleRectangleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const index = 3;

  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  return (
    <>
      <div className={styles.rangeSliderContainer}>
        <div className={styles.rangeSliderItem}>
          ウォッカ
          <div className={styles.rectangleBlock}>
            {/* {[...Array(9)].map((_, index) => ( */}
            <button
              // key={_}
              type="button"
              className={
                index + 1 <= selectedIndex
                  ? styles.rectangleGold
                  : styles.rectangleWhite
              }
              // onClick={() => handleRectangleClick(index)}
              onClick={() => alert("aaa")}
            >
              {/* 長方形のラベルなどがあればここに表示 */}
            </button>
            {/* ))} */}
          </div>
        </div>

        <div className={styles.rangeSliderItem}>
          オレンジジュース
          <div className={styles.rectangleBlock}>
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
            <div className={styles.rectangleGold} />
          </div>
        </div>
      </div>
    </>
  );
};
