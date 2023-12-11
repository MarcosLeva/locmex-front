'use client';

import { Button } from '@/components/ui/button';

import { classNames } from '@/utils/classnames';
import { Menu } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';
import HeaderIcon from './components/HeaderIcon';
import MapComponent from './Map';
import SidebarHeader from './components/SidebarHeader';
import SidebarNavbar from './components/SidebarNavbar';
import SidebarContent from './components/SidebarContent';
import { useRouter } from 'next/navigation';

const MainComponent = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const router = useRouter();

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useLayoutEffect(() => {
    // if (true) {
    //   router.push('/login');
    // }
  }, [router]);

  return (
    <>
      <div className='w-full h-screen flex'>
        <div
          className={classNames(
            !showSidebar && 'hidden',
            'w-full md:w-[28rem]'
          )}>
          <div className='flex flex-col'>
            <SidebarHeader handleSidebar={handleSidebar} />
            <SidebarNavbar />
            <SidebarContent />
          </div>
        </div>
        <Button
          variant={'secondary'}
          className={classNames(
            showSidebar && 'left-[28rem]',
            'hidden md:block absolute  w-5 p-0 h-36 rounded-l-none rounded-tr-2xl rounded-br-2xl top-36 z-10'
          )}
          onClick={handleSidebar}></Button>
        <div className='flex-auto flex flex-col'>
          {!showSidebar && (
            <header className='bg-slate-900 h-16 flex justify-between md:hidden'>
              <div className='p-4 flex justify-center items-center'>
                <img src='assets/logo.png' alt='logo' className='w-32' />
              </div>
              <div className='flex gap-2 items-center pr-2'>
                <HeaderIcon tooltip='Abrir menu' onClick={handleSidebar}>
                  <Menu className='h-5 w-5' />
                </HeaderIcon>
              </div>
            </header>
          )}
          <MapComponent />
        </div>
      </div>
    </>
  );
};
export default MainComponent;
