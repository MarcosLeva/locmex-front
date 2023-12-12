import { serialize } from 'cookie';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
export function POST(req: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  if (token) {
    const headers = {
      'Set-Cookie': serialize('token', '', {
        httpOnly: true,
        maxAge: 0,
        path: '/',
      }),
    };
    return NextResponse.json({ message: 'Logout Successfully' }, { headers });
  }
  return NextResponse.json({ message: 'No token' }, { status: 401 });
}
