// Server Actions の戻り値には Response 型が使えない
'use client';

import { signIn } from 'next-auth/react';

export async function signup(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: username, password: password }),
    });

    // HTTPステータスが 201 でない場合は失敗
    if (!(response.status === 201)) {
      throw new Error('ユーザー登録に失敗しました');
    }

    // サインアップ成功後、サインイン処理を行い、セッションを更新する
    await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    return true;
  } catch {
    return false;
  }
}
