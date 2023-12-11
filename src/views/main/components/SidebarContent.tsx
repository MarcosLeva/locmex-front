'use client';
import { Accordion } from '@/components/ui/accordion';
import AccordionEntry from './AccordionEntry';
import { Compass, Loader2, MapPin, Truck } from 'lucide-react';
import { columns, type Payment } from '@/views/table/components/Columns';
import { DataTable } from '@/views/table/DataTable';

type Props = {
  units: Payment[];
  unitsLoading: boolean;
};

const SidebarContent: React.FC<Props> = ({ units, unitsLoading }) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full text-white'
      defaultValue='item-1'>
      <AccordionEntry value='item-1' title='Unidades' icon={<Truck />}>
        {unitsLoading ? (
          <div className='flex justify-center items-center h-32'>
            <Loader2 className='h-10 w-10 animate-spin' />
          </div>
        ) : (
          <DataTable columns={columns} data={units} />
        )}
      </AccordionEntry>
      <AccordionEntry value='item-2' title='Geocercas' icon={<Compass />}>
        <div className='flex flex-col gap-2'>asdf</div>
      </AccordionEntry>
      <AccordionEntry
        value='item-3'
        title='Puntos de interés'
        icon={<MapPin />}>
        <div className='flex flex-col gap-2'>asdf</div>
      </AccordionEntry>
    </Accordion>
  );
};
export default SidebarContent;
