import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  // the attributes **must** match the ones used on login
  const common = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/', // <= match login
    expires: new Date(0), // remove immediately
  };

  const res = NextResponse.json({ success: true });

  res.headers.append('Set-Cookie', serialize('accessToken', '', common));
  res.headers.append('Set-Cookie', serialize('refreshToken', '', common));

  return res;
}
