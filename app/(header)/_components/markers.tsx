import { AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import { useCallback } from 'react';
type Poi = {
  key: string;
  location: google.maps.LatLngLiteral;
  title: string;
  color: string;
};
import style from './google-map.module.scss';

export default function Markers(props: {
  pois: Poi[];
  handleSelect: (value: string, title: string, color: string) => void;
}) {
  const map = useMap();

  const handleClick = useCallback(
    (ev: google.maps.MapMouseEvent, poi: Poi) => {
      if (!map) return;
      if (!ev.latLng) return;
      console.log('marker clicked:', ev.latLng, poi);

      map.setZoom(11);
      map.panTo(ev.latLng);

      props.handleSelect(poi.key, poi.title, poi.color);
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
            <div
              className={style.tag}
              style={{
                backgroundColor: poi.color,
              }}
            >
              {poi.title}
            </div>
            <div
              className={style.tagafter}
              style={{
                borderTopColor: poi.color,
              }}
            ></div>
            {/* <Pin glyph={poi.title 🥗}></Pin> */}
          </AdvancedMarker>
        );
      })}
    </>
  );
}
