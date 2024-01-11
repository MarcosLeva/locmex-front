import { InfoWindow, Polygon } from '@react-google-maps/api';
import { FC, useEffect, useState } from 'react';
type Path = {
  lat: number;
  lng: number;
};
type PolygonType = Path[];
type Paths = PolygonType[];

type Props = {
  paths: Paths;
};

const Polygons: FC<Props> = ({ paths }) => {
  return (
    paths &&
    paths.map((path, index) => (
      <>
        <Polygon
          key={`polygon-${JSON.stringify(path)}`}
          path={path}
          options={{
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillOpacity: 0.35,
            visible: true,
            zIndex: 1,
          }}
        />
      </>
    ))
  );
};
export default Polygons;
