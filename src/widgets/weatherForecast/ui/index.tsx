import { useTranslation } from "react-i18next";

import { WeatherCard } from "@features/weatherCard";

import { IWeatherForecast } from "./weather-forecast.interface.ts";
import styles from "./WeatherForecast.module.scss";

export const WeatherForecast = ({ weatherInfo }: IWeatherForecast) => {
	const { t } = useTranslation();

	return (
		<div className={styles.forecast}>
			<h2 className={styles.forecast__title}>{t("forecast")}</h2>
			<div className={styles.forecast__holder}>
				{weatherInfo.slice(0, 6).map(dayInfo => (
					<WeatherCard key={dayInfo.dt} dayInfo={dayInfo} />
				))}
			</div>
		</div>
	);
};
