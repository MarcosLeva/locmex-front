'use client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Vehiculos } from '../table/components/Columns';
import { useSelectedRows } from '@/stores/selectedRows';
import { useEffect, useMemo, useState } from 'react';

type Props = {
  units: Vehiculos[];
  unitsLoading: boolean;
};

type TruckPosition = {
  lat: number;
  lng: number;
  id: string;
};

const MapComponent: React.FC<Props> = ({ units, unitsLoading }) => {
  const filterSelectedRows = useSelectedRows(
    (state) => state.filterSelectedRows
  );

  const [truckPositions, setTruckPositions] = useState<TruckPosition[]>([]);
  const rows = useSelectedRows((state) => state.rows);
  const [position, setPosition] = useState({ lat: 19.432608, lng: -99.133209 });
  const filtered = filterSelectedRows(units);
  const positions = useMemo(() => {
    return filtered.map((unit) => ({
      lat: unit.Latitud,
      lng: unit.Longitud,
      id: unit.IdVehiculo,
    }));
  }, [filtered]);

  useEffect(() => {
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
    setTruckPositions(positions);
  }, [rows]);

  return (
    <div className=' w-auto h-screen z-0 '>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY || ''}>
        <Map zoom={5} center={position}>
          {truckPositions.map((truckPosition, index) => (
            <Marker
              key={truckPosition.id}
              position={truckPosition}
              icon='https://icons.iconarchive.com/icons/icons-land/transport/32/Lorry-icon.png'
              animation={google.maps.Animation.DROP}></Marker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};
export default MapComponent;
