import { Geofence, GeofencePoint } from '@/types/geoFences';
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
  handleSelectedGeo: (id: string) => void;
  toggleAllSelectedGeo: () => void;
  isSomeGeoSelected: () => boolean;
  isAllGeoSelected: () => boolean;
  filterSelectedGeoRows: (unfilteredRows: Geofence[]) => Geofence[];
  setGeoRows: (rows: Geofence[]) => void;
};

const initialState: RowsState = {
  rows: [],
  hasRows: false,
};

export const useSelectedGeoRows = create<RowsState & Actions>((set, get) => ({
  ...initialState,
  handleSelectedGeo: (id: string) => {
    const { rows } = get();
    const index = rows.findIndex((row) => row.id === id);
    const newRows = [...rows];
    if (index == -1) newRows.push({ id, selected: true });
    if (index != -1) newRows[index].selected = !newRows[index].selected;
    set({ rows: newRows });
  },
  isSomeGeoSelected() {
    const { rows } = get();
    return rows.some((row) => row.selected);
  },
  isAllGeoSelected() {
    const { rows } = get();
    return rows.every((row) => row.selected);
  },
  toggleAllSelectedGeo: () => {
    const { rows, isAllGeoSelected } = get();
    if (isAllGeoSelected()) {
      return set({ rows: rows.map((row) => ({ ...row, selected: false })) });
    }
    set({
      rows: rows.map((row) => ({ ...row, selected: true })),
    });
  },

  setGeoRows: (newRows: Geofence[]) => {
    const { hasRows, rows } = get();
    if (hasRows && rows.length == newRows.length) return;
    const _newRows = newRows.map((row) => ({
      id: row.IdZona,
      selected: false,
    }));
    set({ rows: _newRows, hasRows: true });
  },

  filterSelectedGeoRows: (unfilteredRows: Geofence[]) => {
    const { rows } = get();
    return unfilteredRows.filter((row) => {
      const index = rows.findIndex((r) => r.id === row.IdZona);
      return index != -1 && rows[index].selected;
    });
  },
}));
