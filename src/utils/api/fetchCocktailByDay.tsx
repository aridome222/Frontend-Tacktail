import type { CocktailData } from '../types';

export const fetchCocktailByDay = async (): Promise<CocktailData[]> => {
  // エンドポイント（TODO: 実行中の環境に応じて、環境変数の部分を本番環境 or 開発環境のものにする）
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cocktails/list`;

  const response = await fetch(url, {
    mode: 'cors',
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error(`レスポンスステータス: ${response.status}`);
  }
  // CocktailData型の配列として格納
  const cocktailData: CocktailData[] = await response.json();
  return cocktailData;
};

// // カクテル情報の型
// export type CocktailData = {
//   id: string; // カクテルのID
//   cocktail: string; // カクテルの名前
//   image: string; // カクテルの画像
//   recipe: string;
//   day: string;
//   trivia: string;
//   description: string; // カクテルの説明
// };
