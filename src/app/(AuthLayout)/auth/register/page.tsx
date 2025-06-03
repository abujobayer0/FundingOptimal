'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Form from './_components/Form';
import Info from './_components/Info';

function RegisterContent() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('referralCode') || '';
  return (
    <div className="min-h-screen flex items-center flex-col md:flex-row justify-center">
      <Info />
      <Form referralCode={referralCode} />
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Suspense
        fallback={
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-300">Loading...</p>
          </div>
        }
      >
        <RegisterContent />
      </Suspense>
    </div>
  );
}
