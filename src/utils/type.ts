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
