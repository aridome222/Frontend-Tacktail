'use client';

import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styles from './Signup.module.css';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ログイン処理を実装
    if (!username || !password) {
      setError('ユーザー名とパスワードを入力してください');
      return;
    }

    console.log(username, password);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        name: username,
        password: password,
      });

      // 初期ページにリダイレクト
      router.push('/');
    } catch (error) {
      setError('ログインに失敗しました。ユーザー名とパスワードを確認してください');
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
