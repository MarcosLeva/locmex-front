'use client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Vehiculos } from '../table/components/Columns';
import { InterestPoint } from '../table/components/IPColumns';
import { useSelectedRows } from '@/stores/selectedRows';
import { useEffect, useMemo, useState } from 'react';
import { useInterestPoints } from '@/services/IPData';
import { useSelectedIPRows } from '@/stores/selectedIP';

type Props = {
  units: Vehiculos[];
  unitsLoading: boolean;
};

type Position = {
  lat: number;
  lng: number;
  id: string;
};

const IP_ICONS = [
  'https://icons.iconarchive.com/icons/icons-land/flat-vector-map-marker/32/Marker-3-Triangle-Green-icon.png',
  'https://icons.iconarchive.com/icons/icons-land/flat-vector-map-marker/32/Marker-3-Triangle-Blue-icon.png',
  'https://icons.iconarchive.com/icons/icons-land/flat-vector-map-marker/32/Marker-3-Triangle-Red-icon.png',
  'https://icons.iconarchive.com/icons/icons-land/flat-vector-map-marker/32/Marker-3-Triangle-Yellow-icon.png',
];

const MapComponent: React.FC<Props> = ({ units, unitsLoading }) => {
  const { data: IPData } = useInterestPoints() as {
    data: InterestPoint[];
  };
  const filterSelectedRows = useSelectedRows(
    (state) => state.filterSelectedRows
  );
  const filterSelectedIPRows = useSelectedIPRows(
    (state) => state.filterSelectedIPRows
  );

  const [truckPositions, setTruckPositions] = useState<Position[]>([]);
  const [interestPoints, setInterestPoints] = useState<Position[]>([]);
  const rows = useSelectedRows((state) => state.rows);
  const IPRows = useSelectedIPRows((state) => state.rows);
  const [position, setPosition] = useState({ lat: 19.432608, lng: -99.133209 });
  const filtered = filterSelectedRows(units);
  const filteredIP = filterSelectedIPRows(IPData || []);
  const positions = useMemo(() => {
    return filtered.map((unit) => ({
      lat: unit.Latitud,
      lng: unit.Longitud,
      id: unit.IdVehiculo,
    }));
  }, [filtered]);

  const IPPositions = useMemo(() => {
    return filteredIP.map((IP) => ({
      lat: IP.Lat,
      lng: IP.Lon,
      id: IP.idPI,
    }));
  }, [filteredIP]);

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
  }, [rows]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setInterestPoints(IPPositions);
  }, [IPRows]); // eslint-disable-line react-hooks/exhaustive-deps

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

          {interestPoints.map((IPPosition, index) => (
            <Marker
              key={IPPosition.id}
              position={IPPosition}
              icon={IP_ICONS[index % 4]}
              animation={google.maps.Animation.DROP}></Marker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};
export default MapComponent;
