'use client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Vehiculos } from '../table/components/Columns';
import { useSelectedRows } from '@/stores/selectedRows';
import { useEffect, useState } from 'react';

type Props = {
  units: Vehiculos[];
  unitsLoading: boolean;
};

type TruckPosition = {
  lat: number;
  lng: number;
};

const MapComponent: React.FC<Props> = ({ units, unitsLoading }) => {
  const filterSelectedRows = useSelectedRows(
    (state) => state.filterSelectedRows
  );
  const [filteredUnits, setFilteredUnits] = useState<Vehiculos[]>([]);
  const [truckPositions, setTruckPositions] = useState<TruckPosition[]>([]);
  const rows = useSelectedRows((state) => state.rows);
  const [position, setPosition] = useState({ lat: 19.432608, lng: -99.133209 });
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    const filtered = filterSelectedRows(units);
    setFilteredUnits(() => filtered);
    const positions = filteredUnits.map((unit) => {
      return {
        lat: unit.Latitud,
        lng: unit.Longitud,
      };
    });
    setTruckPositions(() => positions);
    const calculateCenter = () => {
      let lat = 0;
      let lng = 0;
      if (positions.length === 0)
        return setPosition({ lat: 19.432608, lng: -99.133209 });
      positions.forEach((position) => {
        lat += position.lat;
        lng += position.lng;
      });
      setPosition({ lat: lat / positions.length, lng: lng / positions.length });
    };
    calculateCenter();
  }, [
    units,
    rows,
    filteredUnits,
    filterSelectedRows,
    setFilteredUnits,
    setTruckPositions,
  ]);

  return (
    <div className=' w-auto h-screen z-0 '>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY || ''}>
        <Map zoom={5} center={position}>
          {truckPositions.map((truckPosition, index) => (
            <Marker
              key={index}
              position={truckPosition}
              icon='https://icons.iconarchive.com/icons/icons-land/transport/32/Lorry-icon.png'></Marker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};
export default MapComponent;
