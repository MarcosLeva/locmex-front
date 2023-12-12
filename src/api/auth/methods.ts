import { authUser } from '@/services/authUser';
import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { user, password }: { user: string; password: string } = req.body;
  if (!user || !password)
    return res.status(400).json({ message: 'Invalid body' });

  const response = await authUser({ user, password });
  const { token, success, message } = response;
  if (!success) return res.status(401).json({ message });
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', String(token), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 3, // 3 days
    })
  );
  return res.status(200).json({ message });
}
