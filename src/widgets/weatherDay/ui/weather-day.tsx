import { useDataIcons } from "@widgets/weatherDay/model/data.tsx";

import styles from "./weather-day.module.scss";
import { WeatherDayProps } from "../model/types";

export const WeatherDay = ({ city, weatherInfo }: WeatherDayProps) => {
	const iconClass = styles["day__item-like-icon"];
	const data = useDataIcons({ weatherInfo, iconClass });
	const imgURL = `owf owf-${weatherInfo.weather[0].id} owf-5x`;

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
					{data.map(data => (
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
