import { useTranslation } from "react-i18next";

import { HumidityIcon, WindIcon } from "@shared/lib/ui/icons";

import styles from "./weather-card.module.scss";
import { IWeatherCard } from "../model/types";

export const WeatherCard = ({ weatherDayInfo }: IWeatherCard) => {
	const { t } = useTranslation();

	const imgURL = `owf owf-${weatherDayInfo.weather[0].id} owf-5x`;
	const typeImg = weatherDayInfo.weather[0].id;
	const tempMax = Math.round(weatherDayInfo.main.temp_max);
	const tempMin = Math.round(weatherDayInfo.main.temp_min);
	const humidity = `${weatherDayInfo.main.humidity}%`;
	const windSpeed = Math.round(weatherDayInfo.wind.speed);

	const ms = weatherDayInfo.dt * 1000;
	const date = new Date(ms);

	const weekday = date.toLocaleString(`${t("en")}`, { weekday: "long" });

	return (
		<div className={styles.card}>
			<h3 className={styles.card__day}>{weekday.toUpperCase()}</h3>
			<i className={`${styles.card__img} c-${typeImg} ${imgURL}`} />
			<div className={styles.card__celsia}>
				<p className={styles.card__celsia_max}>{tempMax}°C</p>
				<p className={styles.card__celsia_min}>{tempMin}°C</p>
			</div>
			<div className={styles.card__info}>
				<div className={styles.card__humidity}>
					<HumidityIcon />
					<p>{humidity}</p>
				</div>
				<div className={styles.card__wind}>
					<WindIcon />
					<p>
						{windSpeed}
						km/h
					</p>
				</div>
			</div>
		</div>
	);
};
