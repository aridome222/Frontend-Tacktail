export { auth as middleware } from '@/auth/auth'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
