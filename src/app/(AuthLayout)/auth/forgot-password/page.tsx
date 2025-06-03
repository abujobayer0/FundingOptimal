'use client';
import React from 'react';
import Form from './_components/Form';
import Header from '../_components/Header';

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-10">
      <div className="flex flex-col items-center justify-center pt-12 z-10">
        <Header title="Reset Your Password" />
        <Form />
      </div>
    </div>
  );
};

export default ForgotPassword;
