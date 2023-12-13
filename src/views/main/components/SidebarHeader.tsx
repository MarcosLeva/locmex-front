'use client';
import { Book, LogOut, Settings, X } from 'lucide-react';
import HeaderIcon from './HeaderIcon';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';

type Props = {
  handleSidebar: () => void;
};

const SidebarHeader: React.FC<Props> = ({ handleSidebar }) => {
  const router = useRouter();
  const handleLogout = () => {
    axios
      .post('/api/auth/logout')
      .then((response) => {
        toast({
          title: 'Sesión cerrada',
          description: 'Sesión cerrada correctamente',
          duration: 2500,
        });
        router.push('/login');
        router.refresh();
      })
      .catch((error) => {
        toast({
          title: 'Credenciales incorrectas',
          description: error.response.data.message,
          variant: 'destructive',
          duration: 2500,
        });
      });
  };

  return (
    <header className='bg-slate-900 h-16 flex justify-between'>
      <div className='p-4 flex justify-center items-center'>
        <img src='assets/logo.png' alt='logo' className='w-32' />
      </div>
      <div className='flex gap-2 items-center pr-2'>
        <HeaderIcon tooltip='Aviso de privacidad'>
          <Book className='h-5 w-5' />
        </HeaderIcon>

        <HeaderIcon tooltip='Configuración'>
          <Settings className='h-5 w-5' />
        </HeaderIcon>

        <HeaderIcon tooltip='Cerrar sesión' onClick={handleLogout}>
          <LogOut className='h-5 w-5' />
        </HeaderIcon>

        <HeaderIcon tooltip='Cerrar' onClick={handleSidebar}>
          <X className='h-5 w-5' />
        </HeaderIcon>
      </div>
    </header>
  );
};
export default SidebarHeader;
