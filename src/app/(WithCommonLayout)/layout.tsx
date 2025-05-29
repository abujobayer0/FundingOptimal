import React, { ReactNode } from "react";
import { Footer, Navbar } from "./_components";

interface TWithCommonLayoutProps {
  children: ReactNode;
}

export default function WithCommonLayout({ children }: TWithCommonLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
