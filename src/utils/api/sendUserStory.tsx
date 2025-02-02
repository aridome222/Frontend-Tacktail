import type { UserStoryData } from '../types';

export const sendUserStory = async (token: string): Promise<UserStoryData> => {
  // エンドポイント（TODO: 実行中の環境に応じて、環境変数の部分を本番環境 or 開発環境のものにする）
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/users/story`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token as string}`,
    },
    mode: 'cors',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`レスポンスステータス: ${response.status}`);
  }
  // RecipeData型の配列として格納
  const userStoryData: UserStoryData = await response.json();
  return userStoryData;
};
