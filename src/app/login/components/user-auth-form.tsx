'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/Icons';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  const router = useRouter();

  const [user, setUser] = React.useState({
    user: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    axios
      .post('/api/auth/', user)
      .then((response) => {
        setIsLoading(false);
        if (response.data.success) {
          router.push('/monitor');
          router.refresh();
        }
      })
      .catch((error) => {
        toast({
          title: 'Credenciales incorrectas',
          description: error.response.data.message,
          variant: 'destructive',
          duration: 2500,
        });
        setIsLoading(false);
      });
  }

  return (
    <>
      <div className={cn('grid gap-6', className)} {...props}>
        <form onSubmit={onSubmit}>
          <div className='grid gap-y-[24px]'>
            <div className='grid gap-[16px]'>
              <Label className='sr-only' htmlFor='email'>
                Email
              </Label>
              <Input
                id='user'
                name='user'
                placeholder='Nombre de usuario'
                type='text'
                value={user.user}
                autoCapitalize='none'
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <Input
                id='password'
                name='password'
                placeholder='Contraseña'
                type='password'
                autoCapitalize='none'
                onChange={handleInputChange}
                value={user.password}
                disabled={isLoading}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              )}
              Iniciar sesión
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
