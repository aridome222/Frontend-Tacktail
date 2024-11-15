import { auth } from '@/auth/auth';
import Link from 'next/link';
import styles from './LoginLink.module.css';

export const LoginButton = async () => {
  const session = await auth();

  return (
    <Link
      href='/login'
      className={`${styles.link} ${session?.user ? styles.isDeactive : styles.isActive}`}
    >
      Login
    </Link>
  );
};
