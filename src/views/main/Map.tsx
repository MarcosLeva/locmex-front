'use client';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const MapComponent = () => {
  const position = { lat: 19.33211, lng: -98.57688 };
  const truckPositions = [
    {
      lat: 19.33211,
      lng: -98.97688,
    },
    {
      lat: 19.13211,
      lng: -98.57688,
    },
    {
      lat: 19.23211,
      lng: -98.17688,
    },
  ];

  return (
    <div className=' w-auto h-screen z-0 '>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY || ''}>
        <Map zoom={10} center={position}>
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
