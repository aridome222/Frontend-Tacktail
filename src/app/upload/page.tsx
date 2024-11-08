import styles from './upload.module.css'; // CSSモジュールのインポート

export default function Upload() {
  return (
    <div className={styles.page}>
      <h1>カクテル投稿</h1>
      <form className={styles.form}>
        {/* 画像フィールド */}
        <p>カクテルの画像:</p>

        {/* カクテル名フィールド */}
        <label>
          カクテル名:
          <input type='text' name='name' className={styles.input} />
        </label>

        {/* コメントフィールド */}
        <label>
          コメント:
          <input type='text' name='comment' className={styles.input} />
        </label>

        {/* レシピフィールド */}
        <label>
          必要なレシピ:
          <input type='text' name='text' className={styles.input} />
        </label>

        {/* 送信ボタン */}
        <button type='submit' className={styles.button}>
          投稿
        </button>
      </form>
    </div>
  );
}
