'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Form from './_components/Form';
import Header from '../_components/Header';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const token = searchParams.get('token') || '';

  if (!email || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Invalid Reset Link
          </h1>
          <p className="text-gray-300 mb-6">
            The password reset link is invalid or has expired.
          </p>
          <a
            href="/auth/forgot-password"
            className="text-primary hover:text-green-200 transition-colors"
          >
            Request a new reset link
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header title="Reset Password" />
      <Form email={email} token={token} />
    </div>
  );
}

export default function ResetPasswordPage() {
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
        <ResetPasswordContent />
      </Suspense>
    </div>
  );
}
