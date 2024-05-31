import { TypeHouse } from '@/types/type';

export function convertPois(houses: TypeHouse[]) {
  // const converted = houses.sort((a, b) => {
  //   if (!a.location && !b.location) {
  //     return 0; // If both have no location, keep their order unchanged
  //   } else if (!a.location) {
  //     return -1; // If only a has no location, move it before b
  //   } else if (!b.location) {
  //     return 1; // If only b has no location, move it before a
  //   } else {
  //     return 0; // If both have locations, keep their order unchanged
  //   }
  // });
  const converted = houses.filter((h) => h.location);
  return converted.map((h) => {
    return {
      key: h.key,
      location: h.location ? h.location : { lat: 37.241861, lng: 131.865035 },
      title: h.title,
    };
  });
}

export function getAvgPos(
  pois: {
    key: string;
    location: { lat: number; lng: number };
  }[]
) {
  // Filter out POIs with valid locations
  const validLocations = pois.filter((poi) => poi.location);

  // Calculate the total number of valid locations
  const numValidLocations = validLocations.length;

  // Initialize variables to store the sum of latitude and longitude
  let sumLat = 0;
  let sumLng = 0;

  // Calculate the sum of latitude and longitude values
  validLocations.forEach((poi) => {
    sumLat += poi.location.lat;
    sumLng += poi.location.lng;
  });

  // Calculate the average latitude and longitude
  const avgLat = sumLat / numValidLocations;
  const avgLng = sumLng / numValidLocations;

  // Construct the average location object
  const avgLocation = {
    lat: avgLat,
    lng: avgLng,
  };

  return avgLocation;
}
