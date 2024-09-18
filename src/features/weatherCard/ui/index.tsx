import { useTranslation } from "react-i18next";

import { IWeatherCard } from "./weather-card.interface.ts";
import styles from "./WeatherCard.module.scss";
import Humidity from "../../../shared/lib/ui/icons/humidity";
import Wind from "../../../shared/lib/ui/icons/wind";

export const WeatherCard = ({ dayInfo }: IWeatherCard) => {
	const { t } = useTranslation();

	const imgURL = `owf owf-${dayInfo.weather[0].id} owf-5x`;
	const typeImg = dayInfo.weather[0].id;
	const tempMax = Math.round(dayInfo.main.temp_max);
	const tempMin = Math.round(dayInfo.main.temp_min);
	const humidity = `${dayInfo.main.humidity}%`;
	const windSpeed = Math.round(dayInfo.wind.speed);

	const ms = dayInfo.dt * 1000;
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
					<Humidity />
					<p>{humidity}</p>
				</div>
				<div className={styles.card__wind}>
					<Wind />
					<p>
						{windSpeed}
						km/h
					</p>
				</div>
			</div>
		</div>
	);
};
