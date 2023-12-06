import { Button } from '@/components/ui/button';
import { FileIcon, FileQuestionIcon, Menu } from 'lucide-react';

const SidebarNavbar = () => {
  return (
    <div className='h-12 flex'>
      <Button className='flex-1 rounded-none' variant={'outline'}>
        <FileQuestionIcon className='w-6 h-6' />
      </Button>
      <Button className='flex-1 rounded-none' variant={'outline'}>
        <Menu className='mr-2' /> <span>Menu</span>
      </Button>
      <Button className='flex-1 rounded-none' variant={'outline'}>
        <FileIcon className='mr-2' />
        <span>Informes</span>
      </Button>
    </div>
  );
};
export default SidebarNavbar;
