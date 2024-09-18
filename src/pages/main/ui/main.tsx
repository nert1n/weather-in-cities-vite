import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { RootState } from "@app/store/store";
import { IMain } from "@pages/main/model/main.interface";
import MainService from "@shared/api/main";
import { Loader } from "@shared/lib/ui/components/loader";
import { WeatherDay } from "@widgets/weatherDay";
import { WeatherForecast } from "@widgets/weatherForecast";

import styles from "./MainPage.module.scss";

export const Main = () => {
	const city = useSelector((state: RootState) => state.city.value);
	const { i18n, t } = useTranslation();
	const language = i18n.language;

	const [weatherInfo, setWeatherInfo] = useState<IMain[]>([]);
	const [time] = useState(9);

	const queryClient = useQueryClient();

	const { data, isError, isFetching, isLoading } = useQuery({
		queryKey: ["getAll", city, language],
		queryFn: () => MainService.getAll(city, language),
	});

	useEffect(() => {
		if (city.trim() !== "") {
			queryClient.refetchQueries({
				queryKey: ["getAll", city, language],
				exact: true,
			});
		}
	}, [city, time, language, queryClient]);

	useEffect(() => {
		if (data) {
			const dailyData = data.list.filter(
				(reading: { dt_txt: string | string[] }) =>
					reading.dt_txt.includes(`${time}:00:00`)
			);
			setWeatherInfo(dailyData);
		}
	}, [data, time, city]);

	if (isError) {
		return (
			<h1 className={styles.main__notfound}>{t("search.city.notfound")}</h1>
		);
	}

	if (isLoading || isFetching) {
		return <Loader />;
	}

	return (
		<div className={styles.main}>
			{weatherInfo.length !== 0 && (
				<>
					<WeatherDay city={city} weatherInfo={weatherInfo[0]} />
					<WeatherForecast weatherInfo={weatherInfo} />
				</>
			)}
		</div>
	);
};
