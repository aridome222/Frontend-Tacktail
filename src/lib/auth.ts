// Server Actions の戻り値には Response 型が使えない
'use server';
import { cookies } from 'next/headers';

export async function signup(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: username, password: password }),
    });

    // HTTPステータスが 200 でない場合は失敗
    if (!response.ok) {
      throw new Error('ログインに失敗しました');
    }

    return true;
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
}

export async function login(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({ name: username, password: password }),
    });

    console.log(response);

    const cookieStore = await cookies();
    const theme = cookieStore.get('theme');

    console.log(theme);

    // HTTPステータスが 200 でない場合は失敗
    if (!response.ok) {
      throw new Error('ログインに失敗しました');
    }

    return true;
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
}

export async function fetchLoginStatus(): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });

    console.log(response);

    const cookieStore = await cookies();
    const theme = cookieStore.get('theme');

    console.log(theme);

    // HTTPステータスが 200 でない場合は失敗
    if (!response.ok) {
      throw new Error('ログイン状態の取得に失敗しました');
    }

    return true;
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
}
