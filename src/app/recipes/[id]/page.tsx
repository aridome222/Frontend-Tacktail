import { SendImage } from '@/app/components/SendImage/index';
import { auth } from '@/auth/auth';
import { fetchRecipe } from '@/utils/api/fetchRecipe';
import type React from 'react';
import { RangeSlider } from './_components/RangeSlider';
import styles from './recipe.module.css';
import { BackButton } from '@/app/components/BackButton/BackButton';

const Recipe = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const recipeData = await fetchRecipe(id);

  // ログインしているユーザー名を取得
  const session = await auth();
  const userId = session?.user?.id ?? '';
  // const sessionToken = session?.user?.sessionToken ?? '';

  return (
    <>
      <div className={styles.page}>
        {/* カクテル画像 */}
        <div className={styles.imageContainer}>
          {/* TODO: cocktaiilId, username は動的ルーティングの番号とログイン済みユーザー名から取ってくるよう修正する */}
          <SendImage
            cocktailId={id}
            username={userId}
            token={session?.user?.sessionToken as string}
          />
        </div>

        {/* カクテル情報 */}
        <h2 className={styles.headline}>{recipeData.name}</h2>
        <div className={styles.text}>
          <p>
            {/* ウォッカベースのカクテルで、ジンジャーエールとライムの爽やかな味わいが特徴です。
            お好みでカットライム、もしくは、ライム果汁を入れるとより爽やかな味わいになります。 */}
            {recipeData.description}
          </p>
        </div>

        {/* 材料 */}
        <h3 className={styles.headline}>材料</h3>
        <div className={styles.ingredient}>
          {recipeData.materials.map((material) => {
            return (
              <div key={material.id}>
                <p>{material.name}</p>
                <RangeSlider isActive={false} value={material.amount} />
              </div>
            );
          })}
        </div>

        {/* 戻るボタン */}
        <BackButton />
      </div>
    </>
  );
};

export default Recipe;
