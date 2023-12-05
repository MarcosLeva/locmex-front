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
} from 'lucide-react';
import { useState } from 'react';

const MainComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className='w-full h-screen flex'>
        <div className={classNames(!showSidebar && 'hidden', ' w-[28rem]')}>
          <div className='flex flex-col'>
            <header className='bg-slate-900 h-16 flex justify-between'>
              <div className='p-2 flex justify-center items-center'>
                <img src='assets/logo.png' alt='logo' className='w-40' />
              </div>
              <div className='flex gap-2 items-center pr-2'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='outline'
                        size='icon'
                        className='rounded-full'>
                        <Book className='h-5 w-5' />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Book</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button variant='outline' size='icon' className='rounded-full'>
                  <Settings className='h-5 w-5' />
                </Button>
                <Button variant='outline' size='icon' className='rounded-full'>
                  <LogOut className='h-5 w-5' />
                </Button>
                <Button variant='outline' size='icon' className='rounded-full'>
                  <HelpCircleIcon className='h-5 w-5' />
                </Button>
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
            <Accordion type='single' collapsible className='w-full text-white'>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='uppercase px-4'>
                  Unidades
                </AccordionTrigger>
                <AccordionContent className='p-4'>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='uppercase px-4'>
                  Geocercas
                </AccordionTrigger>
                <AccordionContent className='p-4'>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger className='uppercase px-4'>
                  Puntos de interés
                </AccordionTrigger>
                <AccordionContent className='p-4'>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <Button
          variant={'secondary'}
          className={classNames(
            showSidebar && 'left-[28rem]',
            'absolute  w-5 p-0 h-36 rounded-l-none rounded-tr-2xl rounded-br-2xl top-36 '
          )}
          onClick={handleSidebar}></Button>
        <div className='bg-green-500 flex-auto'></div>
      </div>
    </>
  );
};
export default MainComponent;
