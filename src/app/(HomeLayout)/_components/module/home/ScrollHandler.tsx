'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # symbol
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      // Wait for the page to load
      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  return null;
}
