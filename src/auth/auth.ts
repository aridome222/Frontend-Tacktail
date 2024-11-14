import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

// Define your configuration in a separate variable and pass it to NextAuth()
// This way we can also 'export const config' for use later
export const { handlers, auth, signIn } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'ユーザー名' },
        password: { label: 'password', type: 'password' },
      },
      authorize: async (credentials) => {
        const username = credentials.username;
        const password = credentials.password;
        if (typeof username !== 'string' && typeof password !== 'string') return null;

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify({ name: username, password: password }),
        });

        // HTTPステータスが 200 でない場合は失敗
        if (!response.ok) {
          // throw new Error('ログインに失敗しました');
          return null;
        }

        return (await response.json()) ?? null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth;
      const isOnProtected = nextUrl.pathname.startsWith('/protected');
      const isOnLogin = nextUrl.pathname.startsWith('/login');

      // ログイン済みでログインページにアクセスしている場合
      if (isLoggedIn && isOnLogin) {
        const callBackUrl = nextUrl.searchParams.get('/');
        if (callBackUrl) {
          // コールバックURLが指定されていたらリダイレクト
          return Response.redirect(callBackUrl);
        }
        return true;
      }

      // ログインしていなくても見れるページの場合
      if (!isOnProtected) return true;

      // ログイン済みの場合
      if (isLoggedIn) return true;

      return false;
    },
  },
});
