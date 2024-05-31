'use client';
import { convertPois, getAvgPos } from '@/lib/map';
import { TypeHouse } from '@/types/type';
import { APIProvider, Map, InfoWindow } from '@vis.gl/react-google-maps';
import Markers from './markers';
import { useEffect, useState } from 'react';

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
console.log('test', KEY);
export default function GoogleMap({ houses }: { houses: TypeHouse[] }) {
  const [pois, setPois] = useState(convertPois(houses));
  const [avg, setAvg] = useState(getAvgPos(pois));
  // console.log('test', houses);

  useEffect(() => {
    const v = convertPois(houses);
    setPois(v);
    setAvg(getAvgPos(v));
    return;
  }, [houses]);

  return (
    <>
      {KEY && (
        <APIProvider
          apiKey={KEY}
          onLoad={() => console.log('Maps API has loaded.')}
        >
          <Map
            style={{ width: '100vw', height: '10rem' }}
            defaultCenter={avg}
            defaultZoom={4}
            mapId={'73b453cf4433df8f'}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            <Markers pois={pois} />
          </Map>
        </APIProvider>
      )}
    </>
  );
}
