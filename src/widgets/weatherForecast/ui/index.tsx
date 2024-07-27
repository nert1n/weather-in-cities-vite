import { WeatherDayProps } from "./weather-forecast.interface.ts";
import styles from "./WeatherForecast.module.scss";

export const WeatherForecast: React.FC<WeatherDayProps> = ({ weatherInfo }) => {
  return (
    <div className={styles.forecast}>
      <h2>5-Day Forecast</h2>
      <div className={styles.forecast__holder}>
        {weatherInfo.length !== 0 &&
          weatherInfo.slice(0, 6).map((day) => (
            <div key={day.dt}>
              <p>{new Date(day.dt * 1000).toLocaleString()}</p>
              <p>Temperature: {day.main.temp}°C</p>
              <p>Humidity: {day.main.humidity}%</p>
              <p>Wind speed: {day.wind.speed} m/s</p>
              <p>Description: {day.weather[0].description}</p>
              <p>Icon: {day.weather[0].icon}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
