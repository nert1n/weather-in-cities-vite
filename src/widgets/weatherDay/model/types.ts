import { TWeatherData } from "@shared/types/weather.ts";

export interface IWeatherDay {
	weatherInfo: TWeatherData;
	city: string;
}
