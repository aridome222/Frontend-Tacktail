'use client';

import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
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
      setError('ユーザー名とパスワードを入力してください');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>ご来店ありがとうございます</h1>
          <p className={styles.subtitle}>ユーザー名とパスワードを記入し、お待ち下さい</p>
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
            <Link href='/' className={styles.forgotPasswordLink}>
              パスワードを忘れた方はこちら
            </Link>
            <Link href='/signup' className={styles.signupLink}>
              はじめてのご来店はこちら
            </Link>
          </div>
          <button type='submit' className={styles.button}>
            入店する
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
