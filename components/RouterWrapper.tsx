// components/RouterWrapper.tsx
import { useRouter } from 'next/router';
import { useEffect, useState, ReactNode } from 'react';
import Loading from './Loading';

interface RouterWrapperProps {
  children: ReactNode;
}

const RouterWrapper = ({ children }: RouterWrapperProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // Check if the current route is the home page ("/")
  const isHomePage = router.pathname === "/";

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>{children}</>
      )}
    </div>
  )
};

export default RouterWrapper;
