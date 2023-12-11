'use client';
import { Accordion } from '@/components/ui/accordion';
import AccordionEntry from './AccordionEntry';
import { ShieldQuestionIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SidebarContent = () => {
  return (
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
  );
};
export default SidebarContent;
