import { useTranslation } from "react-i18next";

import { WeatherCard } from "@features/weatherCard";
import { TWeatherInfo } from "@shared/types/weather";

import styles from "./weather-forecast.module.scss";

export const WeatherForecast = ({ weatherInfo }: TWeatherInfo) => {
	const { t } = useTranslation();

	return (
		<div className={styles.forecast}>
			<h2 className={styles.forecast__title}>{t("forecast")}</h2>
			<div className={styles.forecast__holder}>
				{weatherInfo.slice(0, 6).map(weatherDayInfo => (
					<WeatherCard
						key={weatherDayInfo.dt}
						weatherDayInfo={weatherDayInfo}
					/>
				))}
			</div>
		</div>
	);
};
