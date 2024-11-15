import type { User } from '../types';

export const fetchUser = async (token: string): Promise<User> => {
  // エンドポイント（TODO: 実行中の環境に応じて、環境変数の部分を本番環境 or 開発環境のものにする）
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/users`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: 'cors',
    credentials: 'include',
  });
  // console.log(token);
  if (!response.ok) {
    throw new Error(`レスポンスステータス: ${response.status}`);
  }
  // RecipeData型の配列として格納
  const userData: User = await response.json();
  console.log(userData);
  return userData;
};
