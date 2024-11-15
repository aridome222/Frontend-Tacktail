'use client';

// import Link from 'next/link';
import styles from './LoginLink.module.css';
import type { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

export const LoginButton = (props: { session: Session | null }) => {
  const router = useRouter();
  const handleClick = () => {
    router.refresh();
    router.push('/login');
  };

  return (
    <button
      type='button'
      className={`${styles.link} ${props.session?.user ? styles.isDeactive : styles.isActive}`}
      onClick={handleClick}
    >
      Login
    </button>
  );
};
