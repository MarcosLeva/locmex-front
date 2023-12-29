//
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
  Delete,
  Edit,
  Flag,
  MoreHorizontal,
  Share,
  User,
} from 'lucide-react';
import { useSelectedRows } from '@/stores/selectedRows';

export type Geocercas = {
  IdZona: string;
  IdTipoZona: string;
  IdExterno: string;
  Descripcion: string;
  Filtro: boolean;
  Inclusion: boolean;
  Activo: boolean;
  IsMarked: boolean;
  Latitud: number;
  Longitud: number;
  IdUsuarioModificacion: string;
  FechaModificacion: string;
};

export const useColumns = () => {
  // const handleSelectedRows = useSelectedRows(
  //   (state) => state.handleSelectedRows
  // );
  // const rows = useSelectedRows((state) => state.rows);
  // const isAllSelected = useSelectedRows((state) => state.isAllSelected);
  // const isSomeSelected = useSelectedRows((state) => state.isSomeSelected);
  // const toggleAllSelected = useSelectedRows((state) => state.toggleAllSelected);

  const columns: ColumnDef<Geocercas>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          // checked={isAllSelected() || (isSomeSelected() && 'indeterminate')}
          // onCheckedChange={toggleAllSelected}
          aria-label='Select all'
        />
      ),
      cell: ({ row }) => {
        // const index = rows.findIndex(
        //   (selectedRow) => selectedRow.id === row.original.IdZona
        // );
        // const isSelected = index !== -1 ? rows[index].selected : false;

        return (
          <Checkbox
            // checked={isSelected}
            // onCheckedChange={(value) => {
            //   handleSelectedRows(row.original.IdZona);
            // }}
            aria-label='Select row'
          />
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'Descripcion',
      header: 'Descripción',
      cell: ({ row }) => (
        <div className='max-w-[70px] truncate'>
          <span>{row.original.Descripcion}</span>
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
                <Edit />
                Editar
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='flex gap-3'>
                <Delete />
                Eliminar
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return { columns };
};
export default useColumns;
