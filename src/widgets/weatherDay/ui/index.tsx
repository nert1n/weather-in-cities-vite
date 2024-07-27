import { WeatherDayProps } from "./weather-day.interface.ts";
import styles from "./WeatherDay.module.scss";

export const WeatherDay: React.FC<WeatherDayProps> = ({
  weatherInfo,
  city,
}) => {
  console.log(weatherInfo);
  return (
    <div className={styles.day}>
      <h1>{city}</h1>
      <div className={styles.day__holder}>
        <p>Temperature: {weatherInfo.main.temp}°C</p>
        <p>Humidity: {weatherInfo.main.humidity}%</p>
        <p>Wind speed: {weatherInfo.wind.speed} m/s</p>
        <p>Description: {weatherInfo.weather[0].description}</p>
        <p>Icon: {weatherInfo.weather[0].icon}</p>
        <p>Date: {new Date(weatherInfo.dt * 1000).toLocaleString()}</p>
      </div>
    </div>
  );
};
