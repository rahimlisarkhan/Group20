type MainType = "base" | "long" | "easy";

type CountryCode = "AZ" | "USA" | "EN";

interface CoordType {
  lon: number;
  lat: number;
}

interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WheatherType {
  coord: CoordType;
  weather: WeatherInfo[];
  //   weather: Array<WeatherInfo>;
  base: MainType;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: 1 | 0;
    id: number;
    country: CountryCode;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: string;
}
