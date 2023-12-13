'use client';

import relativeTime from 'dayjs/plugin/relativeTime';
import esmx from 'dayjs/locale/es-mx';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);
dayjs.locale(esmx);

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { ColumnDef } from '@tanstack/react-table';
import {
  BarChartHorizontal,
  Flag,
  MoreHorizontal,
  Share,
  User,
} from 'lucide-react';
import { useSelectedRows } from '@/stores/selectedRows';

export type Vehiculos = {
  Timestamp: number;
  Nombre: string;
  Velocidad: number;
  Estatus: string;
  Latitud: number;
  Longitud: number;
  IdVehiculo: string;
};

export const useColumns = () => {
  const handleSelectedRows = useSelectedRows(
    (state) => state.handleSelectedRows
  );
  const rows = useSelectedRows((state) => state.rows);
  const isAllSelected = useSelectedRows((state) => state.isAllSelected);
  const isSomeSelected = useSelectedRows((state) => state.isSomeSelected);
  const toggleAllSelected = useSelectedRows((state) => state.toggleAllSelected);
  console.log(isAllSelected());
  console.log(isSomeSelected());

  const columns: ColumnDef<Vehiculos>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={isAllSelected() || (isSomeSelected() && 'indeterminate')}
          onCheckedChange={toggleAllSelected}
          aria-label='Select all'
        />
      ),
      cell: ({ row }) => {
        const index = rows.findIndex(
          (selectedRow) => selectedRow.id === row.original.IdVehiculo
        );
        const isSelected = index !== -1 ? rows[index].selected : false;

        return (
          <Checkbox
            checked={isSelected}
            onCheckedChange={(value) => {
              handleSelectedRows(row.original.IdVehiculo);
            }}
            aria-label='Select row'
          />
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'Nombre',
      header: 'Nombre',
      cell: ({ row }) => (
        <div className='max-w-[70px] truncate'>
          <span>{row.original.Nombre}</span>
        </div>
      ),
    },
    {
      id: 'Timestamp',
      header: ({ table }) => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>Ult.</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hora del ultimo mensaje.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      cell: ({ row }) => (
        <div className='max-w-[90px] truncate'>
          <span>{dayjs(row.original.Timestamp).fromNow()}</span>
        </div>
      ),
    },
    {
      id: 'Estatus',
      header: 'Estatus',
      cell: ({ row }) => (
        <div className='max-w-[50px] flex gap-1 items-center'>
          <span
            className={`w-2 h-2 rounded-full ${
              row.original.Estatus === 'Normal'
                ? 'bg-green-500'
                : 'bg-slate-500'
            }`}></span>
          <span className='truncate'>
            {Number(row.original.Velocidad).toFixed(2)}
          </span>
        </div>
      ),
    },
    {
      id: 'actions',
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'>
              <MoreHorizontal />
              <span className='sr-only'>Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-[160px]'>
            <DropdownMenuItem>
              <div className='flex gap-3'>
                <Flag />
                Alertas
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='flex gap-3'>
                <Share />
                Compartir
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='flex gap-3'>
                <User />
                Vista de calle
              </div>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className='flex gap-3'>
                  <BarChartHorizontal />
                  Reportes
                </div>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Reporte de geocercas</DropdownMenuItem>
                <DropdownMenuItem>
                  Reporte detallado de actividad
                </DropdownMenuItem>
                <DropdownMenuItem>Reporte de viajes</DropdownMenuItem>
                <DropdownMenuItem>Recorrido de unidad</DropdownMenuItem>
                <DropdownMenuItem>Reporte de kilometraje</DropdownMenuItem>
                <DropdownMenuItem>Reporte de estado</DropdownMenuItem>
                <DropdownMenuItem>Reporte de paradas</DropdownMenuItem>
                <DropdownMenuItem>Reporte de combustible</DropdownMenuItem>
                <DropdownMenuItem>Reporte de sensores</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return {
    columns,
  };
};
export default useColumns;
