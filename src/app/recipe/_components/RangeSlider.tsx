"use client";

import type React from "react";
import { useState } from "react";
import styles from "./RangeSlider.module.css";

export const RangeSlider: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // 長方形のクリック処理
  const handleRectangleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className={styles.rangeSliderContainer}>
        <div className={styles.rangeSliderItem}>
          {[...Array(10)].map((_, index) => (
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              type="button"
              className={
                index <= selectedIndex
                  ? styles.rectangleGold
                  : styles.rectangleWhite
              }
              onClick={() => handleRectangleClick(index)}
            >
              {}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
