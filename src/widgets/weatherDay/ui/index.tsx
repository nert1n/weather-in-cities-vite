import { useTranslation } from "react-i18next";

import { WeatherDayProps } from "./weather-day.interface.ts";
import styles from "./WeatherDay.module.scss";
import FellLike from "../../../shared/lib/ui/icons/fell_like";
import Humidity from "../../../shared/lib/ui/icons/humidity";
import Pressure from "../../../shared/lib/ui/icons/pressure";
import SeaLevel from "../../../shared/lib/ui/icons/sea_level";
import Visibility from "../../../shared/lib/ui/icons/visibility";
import Wind from "../../../shared/lib/ui/icons/wind";

export const WeatherDay: React.FC<WeatherDayProps> = ({
  weatherInfo,
  city,
}) => {
  const { t } = useTranslation();

  const imgURL = `owf owf-${weatherInfo.weather[0].id} owf-5x`;

  const iconClass = styles["day__item-like-icon"];
  const iconColor = "var(--text-color-light)";
  const iconWidth = 40;
  const iconHeight = 35;

  const data = [
    {
      img: (
        <FellLike
          className={iconClass}
          color={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      ),
      name: t("feel.like"),
      info: Math.round(weatherInfo.main.feels_like) + "°",
    },
    {
      img: (
        <Wind
          className={iconClass}
          color={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      ),
      name: t("wind"),
      info: Math.round(weatherInfo.wind.speed) + t("km/h"),
    },
    {
      img: (
        <Visibility
          className={iconClass}
          color={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      ),
      name: t("visibility"),
      info: Math.round(weatherInfo.visibility) / 1000 + t("km"),
    },
    {
      img: (
        <Humidity
          className={iconClass}
          color={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      ),
      name: t("humidity"),
      info: Math.round(weatherInfo.main.humidity),
    },
    {
      img: (
        <Pressure
          className={iconClass}
          color={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      ),
      name: t("pressure"),
      info: Math.round(weatherInfo.main.pressure) + t("mb"),
    },
    {
      img: (
        <SeaLevel
          className={iconClass}
          color={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      ),
      name: t("sea.level"),
      info: Math.round(weatherInfo.main.sea_level),
    },
  ];
  return (
    <div className={styles.day__info}>
      <h1 className={styles.day__title}>{city}</h1>
      <div className={styles.day__container}>
        <div className={styles.day__item}>
          <div className={styles.day__weather}>
            <i className={`${imgURL} ${styles.day__icon}`}></i>
            <div className={styles.day__temperature}>
              <p className={styles.day__temp}>
                {Math.round(weatherInfo.main.temp)}
              </p>
              <p className={styles.day__celsia}>°C</p>
            </div>
          </div>
          <div className={styles["day__weather-info"]}>
            <h3 className={styles["day__weather-title"]}>
              {weatherInfo.weather[0].description.toUpperCase()}
            </h3>
          </div>
        </div>
        <div className={styles.day__item}>
          {data.map((data) => (
            <div key={data.info} className={styles["day__item-like"]}>
              {data.img}
              <div className={styles["day__item-like-info"]}>
                <p className={styles["day__item-like-label"]}>{data.name}</p>
                <p className={styles["day__item-like-temperature"]}>
                  {data.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
