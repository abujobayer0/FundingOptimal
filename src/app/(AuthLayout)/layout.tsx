import React, { ReactNode } from "react";

interface TWithAuthLayoutProps {
  children: ReactNode;
}

export default function WithAuthLayout({ children }: TWithAuthLayoutProps) {
  return <div>{children}</div>;
}
