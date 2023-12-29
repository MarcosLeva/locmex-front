//
'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import { ColumnDef } from '@tanstack/react-table';
import { Delete, Edit, MoreHorizontal } from 'lucide-react';
import { useSelectedRows } from '@/stores/selectedRows';

export type InterestPoint = {
  idPI: string;
  Desc: string;
  Lat: number;
  Lon: number;
  Act: boolean;
};

export const useIPColumns = () => {
  // const handleSelectedRows = useSelectedRows(
  //   (state) => state.handleSelectedRows
  // );
  // const rows = useSelectedRows((state) => state.rows);
  // const isAllSelected = useSelectedRows((state) => state.isAllSelected);
  // const isSomeSelected = useSelectedRows((state) => state.isSomeSelected);
  // const toggleAllSelected = useSelectedRows((state) => state.toggleAllSelected);

  const columns: ColumnDef<InterestPoint>[] = [
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
      accessorKey: 'Desc',
      header: 'Nombre',
      cell: ({ row }) => (
        <div className='max-w-[280px] truncate'>
          <span>{row.original.Desc}</span>
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
export default useIPColumns;
