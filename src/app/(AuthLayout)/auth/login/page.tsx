'use client';
import React from 'react';
import Form from './_components/Form';
import Header from '../_components/Header';

export default function Login() {
  return (
    <div className="flex flex-col items-center z-10">
      <div className="flex flex-col items-center pt-12 z-10">
        <Header title="Login With FundingOptimal Today" />
        <Form />
      </div>
    </div>
  );
}
