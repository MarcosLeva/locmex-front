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
  Sigma,
  SignalIcon,
  X,
} from 'lucide-react';
import { useState } from 'react';
import HeaderIcon from './components/HeaderIcon';
import AccordionEntry from './components/AccordionEntry';

const MainComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
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

                <HeaderIcon tooltip='Cerrar sesión'>
                  <LogOut className='h-5 w-5' />
                </HeaderIcon>

                <HeaderIcon tooltip='Cerrar' onClick={handleSidebar}>
                  <X className='h-5 w-5' />
                </HeaderIcon>
              </div>
            </header>
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
            <Accordion
              type='single'
              collapsible
              className='w-full text-white'
              defaultValue='item-1'>
              <AccordionEntry value='item-1' title='Unidades'>
                <div className='flex flex-col gap-2'>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Unidades</span>
                  </Button>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Unidades</span>
                  </Button>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Unidades</span>
                  </Button>
                </div>
              </AccordionEntry>
              <AccordionEntry value='item-2' title='Geocercas'>
                <div className='flex flex-col gap-2'>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Geocercas</span>
                  </Button>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Geocercas</span>
                  </Button>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Geocercas</span>
                  </Button>
                </div>
              </AccordionEntry>
              <AccordionEntry value='item-3' title='Puntos de interés'>
                <div className='flex flex-col gap-2'>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Rutas</span>
                  </Button>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Rutas</span>
                  </Button>
                  <Button variant={'outline'} className='flex-1 rounded-none'>
                    <ShieldQuestionIcon className='w-6 h-6' />
                    <span>Rutas</span>
                  </Button>
                </div>
              </AccordionEntry>
            </Accordion>
          </div>
        </div>
        <Button
          variant={'secondary'}
          className={classNames(
            showSidebar && 'left-[28rem]',
            'hidden md:block absolute  w-5 p-0 h-36 rounded-l-none rounded-tr-2xl rounded-br-2xl top-36'
          )}
          onClick={handleSidebar}></Button>
        <Button
          variant={'secondary'}
          size={'icon'}
          className={classNames(
            showSidebar && 'hidden',
            'absolute  md:hidden p-0 h-10 w-10 rounded-full bottom-4 right-4'
          )}
          onClick={handleSidebar}>
          <MenuIcon className='w-5 h-5' />
        </Button>
        <div className='bg-green-500 flex-auto'></div>
      </div>
    </>
  );
};
export default MainComponent;
