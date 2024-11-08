"use client";

import type React from "react";
import { useState } from "react";
import styles from "./RangeSlider.module.css";

type RangeSliderProps = { isActive: boolean; value?: number };

export const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(
    props.value ? props.value : -1
  );

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
              className={`
                ${
                  index + 1 <= selectedIndex
                    ? styles.rectangleGold
                    : styles.rectangleWhite
                }
                ${props.isActive ? styles.active : styles.deactive}`}
              onClick={() => handleRectangleClick(index + 1)}
            >
              {}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
