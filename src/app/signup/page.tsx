'use client';

import { signup } from '@/lib/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const username = data.get('username') as string;
    const password = data.get('password') as string;

    if (!username || !password) {
      setError('ユーザー名とパスワードを入力してください。');
      return;
    }

    const isSignupSucceeded = await signup(username, password);
    if (isSignupSucceeded) {
      router.push('/');
    } else {
      setError('ユーザー登録に失敗しました。');
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
