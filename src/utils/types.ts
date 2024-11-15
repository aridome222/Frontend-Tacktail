// レシピデータの型
export type RecipeData = {
  id: string; // カクテルのID
  name: string; // カクテルの名前
  description: string; // カクテルの説明
  image: string; // カクテルの画像
  materials: {
    id: string; // 材料のID
    name: string; // 材料の名前
    description: string; // 材料の説明
    amount: number; // 材料の量
  }[];
};

// カクテル情報の型
export type CocktailData = {
  id: string; // カクテルのID
  cocktail: string; // カクテルの名前
  image: string; // カクテルの画像
  recipe: string;
  day: string;
  trivia: string;
  description: string; // カクテルの説明
};

// ユーザー情報の型
export type User = {
  id: string; // ユーザーID
  name: string; // ユーザー名
  password: string; // パスワード
  story: number; // ユーザーのストーリーモードクリア数
};

export type UserStoryData = {
  user_id: string;
  story: number;
};
