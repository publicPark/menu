import {
  AdvancedMarker,
  Pin,
  useMap,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';
type Poi = {
  key: string;
  location: google.maps.LatLngLiteral;
  title: string;
};
import Link from 'next/link';

export default function Markers(props: {
  pois: Poi[];
  handleSelect?: (poi: Poi) => void;
}) {
  const map = useMap();
  const [selected, setSelected] = useState<Poi | null>(null);

  // 마커 선택시
  const handleClick = useCallback(
    (ev: google.maps.MapMouseEvent, poi: Poi) => {
      if (!map) return;
      if (!ev.latLng) return;
      console.log('marker clicked:', ev.latLng, poi);

      map.setZoom(11);
      map.panTo(ev.latLng);

      setSelected(poi);
    },
    [map]
  );

  return (
    <>
      {props.pois.map((poi: Poi) => {
        return (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}
            onClick={(e) => handleClick(e, poi)}
            title={poi.title}
          >
            {selected && (
              <InfoWindow
                position={selected.location}
                onCloseClick={() => setSelected(null)}
              >
                <b>{selected.title}</b>
                <div>
                  <Link className="underline" href={`/menu/${selected.key}`}>
                    {selected.key}
                  </Link>
                </div>
              </InfoWindow>
            )}
            {/* <Pin glyph={poi.title 🥗}></Pin> */}
          </AdvancedMarker>
        );
      })}
    </>
  );
}
