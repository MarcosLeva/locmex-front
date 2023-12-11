'use client';
import { Accordion } from '@/components/ui/accordion';
import AccordionEntry from './AccordionEntry';
import { Compass, MapPin, ShieldQuestionIcon, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const SidebarContent = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full text-white'
      defaultValue='item-1'>
      <AccordionEntry value='item-1' title='Unidades' icon={<Truck />}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Name</TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className='text-right'>$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionEntry>
      <AccordionEntry value='item-2' title='Geocercas' icon={<Compass />}>
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
      <AccordionEntry
        value='item-3'
        title='Puntos de interés'
        icon={<MapPin />}>
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
