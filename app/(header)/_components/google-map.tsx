'use client';
import { convertPois, getAvgPos } from '@/lib/map';
import { TypeHouse } from '@/types/type';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import Markers from './markers';
import { useEffect, useState } from 'react';
const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
import style from './google-map.module.scss';
import Link from 'next/link';

export default function GoogleMap({ houses }: { houses: TypeHouse[] }) {
  const [target, setTarget] = useState({ key: '', title: '', color: '' });
  const [pois, setPois] = useState(convertPois(houses));
  const [avg, setAvg] = useState(getAvgPos(pois));
  // console.log('test', houses);

  useEffect(() => {
    const v = convertPois(houses);
    setPois(v);
    setAvg(getAvgPos(v));
    return;
  }, [houses]);

  function handleSelect(value: string, title: string, color: string) {
    setTarget({
      key: value,
      title: title,
      color,
    });
  }

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
            <Markers pois={pois} handleSelect={handleSelect} />
          </Map>
        </APIProvider>
      )}

      <section className="text-center p-4">
        {target.title && (
          <>
            <Link href={`/menu/${target.key}`}>
              <button
                className={style.go}
                style={{
                  backgroundColor: target.color,
                }}
              >
                <span>GO TO {target.title}</span>
              </button>
            </Link>
            <p className={style.key}>Key: {target.key}</p>
          </>
        )}
      </section>
    </>
  );
}
