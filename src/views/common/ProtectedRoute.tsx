'use client';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = false;
  const router = useRouter();
  return isAuth ? children : router.push('/login');
};
export default ProtectedRoute;
