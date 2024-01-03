import { InterestPoint } from '@/views/table/components/IPColumns';
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
  handleSelectedIP: (id: string) => void;
  toggleAllSelectedIP: () => void;
  isSomeIPSelected: () => boolean;
  isAllIPSelected: () => boolean;
  filterSelectedIPRows: (unfilteredRows: InterestPoint[]) => InterestPoint[];
  setIPRows: (rows: InterestPoint[]) => void;
};

const initialState: RowsState = {
  rows: [],
  hasRows: false,
};

export const useSelectedRows = create<RowsState & Actions>((set, get) => ({
  ...initialState,
  handleSelectedIP: (id: string) => {
    const { rows } = get();
    const index = rows.findIndex((row) => row.id === id);
    const newRows = [...rows];
    if (index == -1) newRows.push({ id, selected: true });
    if (index != -1) newRows[index].selected = !newRows[index].selected;
    set({ rows: newRows });
  },
  isSomeIPSelected() {
    const { rows } = get();
    return rows.some((row) => row.selected);
  },
  isAllIPSelected() {
    const { rows } = get();
    return rows.every((row) => row.selected);
  },
  toggleAllSelectedIP: () => {
    const { rows, isAllIPSelected } = get();
    if (isAllIPSelected()) {
      return set({ rows: rows.map((row) => ({ ...row, selected: false })) });
    }
    set({
      rows: rows.map((row) => ({ ...row, selected: true })),
    });
  },

  setIPRows: (newRows: InterestPoint[]) => {
    const { hasRows, rows } = get();
    if (hasRows && rows.length == newRows.length) return;
    const _newRows = newRows.map((row) => ({
      id: row.idPI,
      selected: false,
    }));
    set({ rows: _newRows, hasRows: true });
  },

  filterSelectedIPRows: (unfilteredRows: InterestPoint[]) => {
    const { rows } = get();
    return unfilteredRows.filter((row) => {
      const index = rows.findIndex((r) => r.id === row.idPI);
      return index != -1 && rows[index].selected;
    });
  },
}));
