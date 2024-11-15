import type { CocktailImageData } from '../types';

export const sendCocktailImage = async (
  user_id: string,
  cocktail_id: string,
  image: string,
  token: string,
): Promise<CocktailImageData> => {
  // エンドポイント（TODO: 実行中の環境に応じて、環境変数の部分を本番環境 or 開発環境のものにする）
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/cocktail_images`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id,
      cocktail_id,
      image,
    }),
    mode: 'cors',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`レスポンスステータス: ${response.status}`);
  }
  // RecipeData型の配列として格納
  const CocktailImageData: CocktailImageData = await response.json();
  return CocktailImageData;
};
