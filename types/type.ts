interface Location {
  lat: number;
  lng: number;
}

export type TypeMeal = {
  id: string;
  houseKey: string;
  title: string;
  image?: string;
  summary?: string;
};

export type TypeHouse = {
  id: string;
  key: string;
  title: string;
  summary?: string;
  location?: Location;
};
