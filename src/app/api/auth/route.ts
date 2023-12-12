import { authUser } from '@/services/authUser';

import cookie from 'cookie';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { user, password } = await request.json();
  if (!user || !password)
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );

  const response = await authUser({ user, password });
  const { token, success, message } = response;
  if (!success) return NextResponse.json({ message, success }, { status: 401 });

  const headers = {
    'Set-Cookie': cookie.serialize('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 3,
      path: '/',
    }),
  };
  return NextResponse.json({ message, success }, { headers });
}
