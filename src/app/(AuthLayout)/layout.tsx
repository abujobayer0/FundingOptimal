'use client';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center relative">
      <div className="flex flex-col items-center relative justify-center">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
