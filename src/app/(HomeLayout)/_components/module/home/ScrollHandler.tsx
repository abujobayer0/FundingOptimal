'use client';

import { useEffect } from 'react';
import { Suspense } from 'react';

function ScrollHandlerContent() {
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
  }, []);

  return null;
}

export default function ScrollHandler() {
  return (
    <Suspense fallback={null}>
      <ScrollHandlerContent />
    </Suspense>
  );
}
