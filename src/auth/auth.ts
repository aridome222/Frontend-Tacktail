import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface User {
    username: string;
    sessionToken: string;
  }
}

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

        const { token: sessionToken } = await response.json();

        return { username, sessionToken };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.sessionToken = user.sessionToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.username = token.username as string;
      session.user.sessionToken = token.sessionToken as string;
      return session;
    },
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
