'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import AccordionEntry from './AccordionEntry';
import { Compass, Loader2, MapPin, Truck } from 'lucide-react';
import { useColumns, type Vehiculos } from '@/views/table/components/Columns';
import { DataTable } from '@/views/table/DataTable';
import { useToast } from '@/components/ui/use-toast';
import { useGeofences } from '@/services/geofencesData';
import { ScrollArea } from '@/components/ui/scroll-area';

type Props = {
  units: Vehiculos[];
  unitsLoading: boolean;
};

const SidebarContent: React.FC<Props> = ({ units, unitsLoading }) => {
  const { data, error, isLoading, isRefetching } = useGeofences();
  const { toast } = useToast();
  const { columns } = useColumns();

  if (error && !isLoading && !isRefetching) {
    toast({
      title: 'Error',
      description: 'Ocurrio un error al cargar las geocercas',
      variant: 'destructive',
      duration: 2500,
    });
  }

  return (
    <ScrollArea className='h-[calc(100vh-7rem)] w-full'>
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
          {isLoading || isRefetching ? (
            <div className='flex justify-center items-center h-32'>
              <Loader2 className='h-10 w-10 animate-spin' />
            </div>
          ) : (
            <div className='w-full flex flex-col bg-blue-300'>
              {data.map((geofence: any, index: any) => (
                <p key={index}>{JSON.stringify(geofence)}</p>
              ))}
            </div>
          )}
        </AccordionEntry>
        <AccordionEntry
          value='item-3'
          title='Puntos de interés'
          icon={<MapPin />}>
          <div className='flex flex-col gap-2'>asdf</div>
        </AccordionEntry>
      </Accordion>
    </ScrollArea>
  );
};
export default SidebarContent;
