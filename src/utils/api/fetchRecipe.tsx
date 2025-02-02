import type { RecipeData } from '../types';

export const fetchRecipe = async (id: string): Promise<RecipeData> => {
  // エンドポイント（TODO: 実行中の環境に応じて、環境変数の部分を本番環境 or 開発環境のものにする）
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cocktails/individual/${id}`;

  const response = await fetch(url, {
    mode: 'cors',
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error(`レスポンスステータス: ${response.status}`);
  }
  // RecipeData型の配列として格納
  const recipesData: RecipeData = await response.json();
  return recipesData;
};
