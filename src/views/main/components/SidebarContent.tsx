'use client';
import { Accordion } from '@/components/ui/accordion';
import AccordionEntry from './AccordionEntry';
import { Compass, Loader2, MapPin, Truck } from 'lucide-react';
import { useColumns, type Vehiculos } from '@/views/table/components/Columns';
import { DataTable } from '@/views/table/DataTable';
import { useToast } from '@/components/ui/use-toast';
import { useGeofences } from '@/services/geofencesData';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CommonTable } from '@/views/table/CommonTable';
import { useGeoColumns } from '@/views/table/components/GeoColumns';
import { useInterestPoints } from '@/services/IPData';
import useIPColumns from '@/views/table/components/IPColumns';

type Props = {
  units: Vehiculos[];
  unitsLoading: boolean;
};

const SidebarContent: React.FC<Props> = ({ units, unitsLoading }) => {
  const { data, error, isLoading, isRefetching } = useGeofences();
  const {
    data: IPData,
    error: IPError,
    isLoading: IPLoading,
    isRefetching: IPRefetching,
  } = useInterestPoints();
  const { toast } = useToast();
  const { columns } = useColumns();
  const { columns: geoColumns } = useGeoColumns();
  const { columns: IPColumns } = useIPColumns();

  if (error && !isLoading && !isRefetching) {
    toast({
      title: 'Error',
      description: 'Ocurrio un error al cargar las geocercas',
      variant: 'destructive',
      duration: 2500,
    });
  }

  if (IPError && !IPLoading && !IPRefetching) {
    toast({
      title: 'Error',
      description: 'Ocurrio un error al cargar los puntos de interés',
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
            <CommonTable columns={geoColumns} data={data} />
          )}
        </AccordionEntry>
        <AccordionEntry
          value='item-3'
          title='Puntos de interés'
          icon={<MapPin />}>
          {IPLoading || IPRefetching ? (
            <div className='flex justify-center items-center h-32'>
              <Loader2 className='h-10 w-10 animate-spin' />
            </div>
          ) : (
            <CommonTable columns={IPColumns} data={IPData} />
          )}
        </AccordionEntry>
      </Accordion>
    </ScrollArea>
  );
};
export default SidebarContent;
