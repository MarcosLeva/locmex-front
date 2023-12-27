import { Vehiculos } from '@/views/table/components/Columns';
import { create } from 'zustand';

type Row = {
  id: string;
  selected: boolean;
};

type RowsState = {
  rows: Row[];
  hasRows: boolean;
};

type Actions = {
  handleSelectedRows: (id: string) => void;
  toggleAllSelected: () => void;
  isSomeSelected: () => boolean;
  isAllSelected: () => boolean;
  filterSelectedRows: (unfilteredRows: Vehiculos[]) => Vehiculos[];
  setRows: (rows: Vehiculos[]) => void;
};

const initialState: RowsState = {
  rows: [],
  hasRows: false,
};

export const useSelectedRows = create<RowsState & Actions>((set, get) => ({
  ...initialState,
  handleSelectedRows: (id: string) => {
    const { rows } = get();
    const index = rows.findIndex((row) => row.id === id);
    const newRows = [...rows];
    if (index == -1) newRows.push({ id, selected: true });
    if (index != -1) newRows[index].selected = !newRows[index].selected;
    set({ rows: newRows });
  },
  isSomeSelected() {
    const { rows } = get();
    return rows.some((row) => row.selected);
  },
  isAllSelected() {
    const { rows } = get();
    return rows.every((row) => row.selected);
  },
  toggleAllSelected: () => {
    const { rows, isAllSelected } = get();
    if (isAllSelected()) {
      return set({ rows: rows.map((row) => ({ ...row, selected: false })) });
    }
    set({
      rows: rows.map((row) => ({ ...row, selected: true })),
    });
  },

  setRows: (newRows: Vehiculos[]) => {
    const { hasRows, rows } = get();
    if (hasRows && rows.length == newRows.length) return;
    const _newRows = newRows.map((row) => ({
      id: row.IdVehiculo,
      selected: false,
    }));
    set({ rows: _newRows, hasRows: true });
  },

  filterSelectedRows: (unfilteredRows: Vehiculos[]) => {
    const { rows } = get();
    return unfilteredRows.filter((row) => {
      const index = rows.findIndex((r) => r.id === row.IdVehiculo);
      return index != -1 && rows[index].selected;
    });
  },
}));
