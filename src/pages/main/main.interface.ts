export interface WeatherReading {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
}

export interface WeatherData {
  list: WeatherReading[];
}
