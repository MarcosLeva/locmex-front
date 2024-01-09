'use client';
import {
  Marker,
  LoadScriptNext,
  GoogleMap,
  InfoWindow,
  Polygon,
} from '@react-google-maps/api';
import { Vehiculos } from '../table/components/Columns';
import { InterestPoint } from '../table/components/IPColumns';
import { useSelectedRows } from '@/stores/selectedRows';
import { createRef, useEffect, useMemo, useState } from 'react';
import { useInterestPoints } from '@/services/IPData';
import { useSelectedIPRows } from '@/stores/selectedIP';
import { useGeofencesPoints } from '@/services/geofencesPointsData';
import { Geofence, GeofencePoint } from '@/types/geoFences';

import { useSelectedGeoRows } from '@/stores/selectedGeo';
import { useMonitor } from '@/services/monitorData';
import { Loader, Loader2 } from 'lucide-react';
import { useGeofences } from '@/services/geofencesData';
import Polygons from './components/Polygons';

type Position = {
  lat: number;
  lng: number;
  id: string;
  description?: string;
};

type Path = Omit<Position, 'id'>;

const IP_ICONS = [
  'https://icons.iconarchive.com/icons/icons-land/flat-vector-map-marker/32/Marker-3-Triangle-Green-icon.png',
  'https://icons.iconarchive.com/icons/icons-land/flat-vector-map-marker/32/Marker-3-Triangle-Blue-icon.png',
  'https://icons.iconarchive.com/icons/icons-land/flat-vector-map-marker/32/Marker-3-Triangle-Red-icon.png',
  'https://icons.iconarchive.com/icons/icons-land/flat-vector-map-marker/32/Marker-3-Triangle-Yellow-icon.png',
];

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const MapComponent = () => {
  const { data: IPData, isLoading: loadingIP } = useInterestPoints();
  const { data: geofencesData, isLoading: loadingGeo } = useGeofences();
  const { data: monitor, isLoading: loadingUnits } = useMonitor();

  const filterSelectedRows = useSelectedRows(
    (state) => state.filterSelectedRows
  );
  const filterSelectedIPRows = useSelectedIPRows(
    (state) => state.filterSelectedIPRows
  );
  const filterSelectedGeoRows = useSelectedGeoRows(
    (state) => state.filterSelectedGeoRows
  );
  const { data: geofencesPoints, isLoading: isLoadingGeoPoints } =
    useGeofencesPoints();

  const [truckPositions, setTruckPositions] = useState<Position[]>([]);
  const [interestPoints, setInterestPoints] = useState<Position[]>([]);
  const [paths, setPaths] = useState<Path[][]>([]);
  const [selectedIP, setSelectedIP] = useState<Position | undefined>(undefined);
  const rows = useSelectedRows((state) => state.rows);
  const IPRows = useSelectedIPRows((state) => state.rows);
  const geoRows = useSelectedGeoRows((state) => state.rows);
  const [position, setPosition] = useState({ lat: 19.432608, lng: -99.133209 });
  const filtered = filterSelectedRows(monitor?.vehiculos || []);
  const filteredIP = filterSelectedIPRows(IPData || []);
  const filteredGeo = filterSelectedGeoRows(geofencesData || []);
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
      description: IP.Desc,
    }));
  }, [filteredIP]);

  // const getPaths = (id: string) => {
  //   return geofencesPoints
  //     ?.filter((point: GeofencePoint) => point?.IdZona === id)
  //     .map((point: GeofencePoint) => {
  //       return {
  //         lat: point?.Latitud,
  //         lng: point?.Longitud,
  //       };
  //     });
  // };

  const geoPaths = useMemo(() => {
    return filteredGeo.map((geofence: Geofence) => {
      const paths = geofencesPoints
        .filter((point: GeofencePoint) => point?.IdZona === geofence?.IdZona)
        .map((point: GeofencePoint) => {
          return {
            lat: point?.Latitud,
            lng: point?.Longitud,
          };
        });

      return paths;
    });
  }, [filteredGeo]);

  // eslint-disable-line react-hooks/exhaustive-deps

  // const filteresPoints = useMemo(() => {
  //   return geofencesPoints?.filter(
  //     (geoFences: any) =>
  //       geoFences?.IdZona === '3028a758-670d-43fa-87c0-e184b1287703'
  //   );
  // }, [geofencesPoints]);

  // const paths = useMemo(() => {
  //   return filteresPoints?.map((geoFence: any) => {
  //     return {
  //       lat: geoFence?.Latitud,
  //       lng: geoFence?.Longitud,
  //     };
  //   });
  // }, [filteresPoints]);

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

  useEffect(() => {
    setPaths((prev) => {
      const newPaths = [...geoPaths];
      return newPaths;
    });
  }, [geoRows]); // eslint-disable-line react-hooks/exhaustive-deps

  if (
    loadingGeo ||
    loadingIP ||
    loadingUnits ||
    isLoadingGeoPoints ||
    !geofencesPoints
  )
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <Loader2 className='h-10 w-10 animate-spin' />
      </div>
    );

  return (
    <div className=' w-auto h-screen z-0 '>
      <LoadScriptNext
        googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_KEY || ''}
        id='main-script-loader'>
        <GoogleMap
          onClick={() => {
            if (selectedIP) setSelectedIP(undefined);
          }}
          id='main-map'
          zoom={5}
          center={position}
          mapContainerStyle={mapContainerStyle}>
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
              animation={google.maps.Animation.DROP}
              onClick={() => setSelectedIP(IPPosition)}></Marker>
          ))}

          {selectedIP && (
            <InfoWindow
              position={{
                lat: selectedIP.lat,
                lng: selectedIP.lng,
              }}
              onCloseClick={() => setSelectedIP(undefined)}>
              <span className='text-slate-900'>
                {selectedIP.description || 'Punto de interés'}
              </span>
            </InfoWindow>
          )}
          <Polygons paths={paths} />
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
};
export default MapComponent;
