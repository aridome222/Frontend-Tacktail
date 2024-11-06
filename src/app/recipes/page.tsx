import { Card } from "../components/Card"
// モックデータ
const recipesData = [
    {
        heading: "モヒート",
        contents: ["ラム", "ミント", "ライム", "炭酸水"],
    },
    {
        heading: "ジンバック",
        contents: ["ジン", "レモン", "ジンジャーエール"],
    },
    {
        heading: "ロングアイランドアイスティー",
        contents: ["ジン", "ウォッカ", "レモン", "ホワイトラム", "テキーラ", "コアントロー", "コーラ"],
    },
];

const Recipes = () => {
    return (
        <>
            <h1>レシピ一覧</h1>
            {recipesData.map((recipe, index) => (
                <Card key={index} heading={recipe.heading} contents={recipe.contents} />
            ))}
        </>
    );
};

export default Recipes;

