'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { classNames } from '@/utils/classnames';
import { useState } from 'react';

const MainComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='w-full h-screen flex'>
      <div className={classNames(!showSidebar && 'hidden', ' w-[28rem]')}>
        <div className='flex flex-col'>
          <div className='bg-slate-800 h-16'></div>
          <div className='h-12 flex'>
            <Button
              className='flex-1 rounded-none'
              variant={'outline'}></Button>
            <Button
              className='flex-1 rounded-none'
              variant={'outline'}></Button>
            <Button
              className='flex-1 rounded-none'
              variant={'outline'}></Button>
          </div>
          <Accordion type='single' collapsible className='w-full text-white'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='uppercase pl-4'>
                Unidades
              </AccordionTrigger>
              <AccordionContent className='p-4'>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='uppercase pl-4'>
                Geocercas
              </AccordionTrigger>
              <AccordionContent className='p-4'>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className='uppercase pl-4'>
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
        variant={'outline'}
        className={classNames(
          showSidebar && 'left-[28rem]',
          'absolute  w-5 p-0 h-36 rounded-l-none rounded-tr-2xl rounded-br-2xl top-36'
        )}
        onClick={handleSidebar}></Button>
      <div className='bg-green-500 flex-auto'></div>
    </div>
  );
};
export default MainComponent;
