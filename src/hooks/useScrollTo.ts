import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const useScrollTo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = useCallback(
    (elementId: string) => {
      // If we're not on the home page, navigate to home page with hash
      if (pathname !== '/') {
        router.push(`/#${elementId}`);
        return;
      }

      // If we're on the home page, just scroll
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [router, pathname]
  );

  return { scrollTo };
};
