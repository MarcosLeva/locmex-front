'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { classNames } from '@/utils/classnames';
import {
  BadgeHelpIcon,
  Book,
  BookAIcon,
  ExternalLinkIcon,
  FileIcon,
  FileQuestionIcon,
  HeartPulseIcon,
  HelpCircle,
  HelpCircleIcon,
  HelpingHand,
  LogOut,
  Menu,
  MenuIcon,
  Settings,
  ShieldQuestionIcon,
  Sidebar,
  Sigma,
  SignalIcon,
  X,
} from 'lucide-react';
import { useState } from 'react';
import HeaderIcon from './components/HeaderIcon';
import AccordionEntry from './components/AccordionEntry';
import MapComponent from './Map';
import SidebarHeader from './components/SidebarHeader';
import SidebarNavbar from './components/SidebarNavbar';
import SidebarContent from './components/SidebarContent';

const MainComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

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
