'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username') as string;
    const password = data.get('password') as string;

    if (!username || !password) {
      setError('ユーザー名とパスワードを入力してください。');
      return;
    }

    try {
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });

      if (result?.error) {
        setError('ログインに失敗しました。ユーザー名とパスワードを確認してください。');
        return;
      }

      // router.refresh();
      router.push('/');
    } catch {
      setError('ログインエラー。');
      return;
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
              name='username'
              className={styles.input}
              placeholder='ユーザー名'
            />
            <input
              id='password'
              name='password'
              type='password'
              className={styles.input}
              placeholder='パスワード'
            />
          </div>
          <div className={styles.linksContainer}>
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
