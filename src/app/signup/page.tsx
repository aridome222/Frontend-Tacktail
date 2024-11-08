'use client';

import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Signup.module.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ログイン処理を実装
    console.log('Logged in with:', username, password);
    if (username && password) {
      console.log('Logged in with:', username, password);
      setError(''); // ログインが成功した場合はエラーをクリア
    } else {
      setError('メールアドレスとパスワードを入力してください');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>はじめてのご来店ありがとうございます</h1>
          <p className={styles.subtitle}>
            当店会員制となります。ユーザー名とパスワードを記入し、会員登録をお願いいたします。
          </p>
        </div>
        <div className={styles.errorContainer}>
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputParent}>
            <input
              id='username'
              className={styles.input}
              placeholder='ユーザー名'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              id='password'
              type='password'
              className={styles.input}
              placeholder='パスワード'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.linksContainer}>
            <Link href='/login' className={styles.loginLink}>
              すでに会員の方はこちら
            </Link>
          </div>
          <button type='submit' className={styles.button}>
            会員登録して入店する
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
