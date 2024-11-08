import type React from 'react';
import Image from 'next/image';
import { RangeSlider } from './_components/RangeSlider';
import styles from './recipe.module.css'; // CSSモジュールのインポート

const Recipe: React.FC = () => {
  return (
    <>
      <div className={styles.page}>
        {/* カクテル画像 */}
        <div className={styles.imageContainer}>
          <Image src='/images/react.png' width={150} height={150} alt='カクテル画像' />
        </div>

        {/* カクテル情報 */}
        <h2 className={styles.headline}>モスコミュール</h2>
        <div className={styles.text}>
          <p>
            ウォッカベースのカクテルで、ジンジャーエールとライムの爽やかな味わいが特徴です。
            お好みでカットライム、もしくは、ライム果汁を入れるとより爽やかな味わいになります。
          </p>
        </div>

        {/* 材料 */}
        <h3 className={styles.headline}>材料</h3>
        <div className={styles.ingredient}>
          <div>
            <p>ウォッカ</p>
            <RangeSlider isActive={false} value={2} />
          </div>
          <div>
            <p>オレンジジュース</p>
            <RangeSlider isActive={false} value={8} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
