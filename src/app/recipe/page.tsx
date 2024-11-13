import type React from 'react';
import { SendImage } from '../components/SendImage/index';
import { RangeSlider } from './_components/RangeSlider';
import styles from './recipe.module.css';
import { fetchLoginStatus } from '@/lib/auth';
// Server component では useRouter ではなく redirect を使う
import { redirect } from 'next/navigation';

const Recipe: React.FC = async () => {
  const isLogin = await fetchLoginStatus();

  if (!isLogin) {
    redirect('/login'); // ログインページにリダイレクト
  }

  console.log(isLogin);

  return (
    <>
      <div className={styles.page}>
        {/* カクテル画像 */}
        <div className={styles.imageContainer}>
          {/* TODO: cocktaiilId, username は動的ルーティングの番号とログイン済みユーザー名から取ってくるよう修正する */}
          <SendImage cocktailId={0} username='testuser' />
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
