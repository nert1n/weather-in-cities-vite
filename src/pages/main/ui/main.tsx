import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { RootState } from "@app/store/store";
import { CityNotFound } from "@entities/cityNotFound";
import MainService from "@shared/api/main";
import { Loader } from "@shared/lib/ui/components/loader";
import { TWeatherData } from "@shared/types/weather";
import { WeatherDay } from "@widgets/weatherDay";
import { WeatherForecast } from "@widgets/weatherForecast";

export const Main = () => {
	const city = useSelector((state: RootState) => state.city.value);
	const { i18n } = useTranslation();

	const [weatherInfo, setWeatherInfo] = useState<TWeatherData[]>([]);

	const { data, isError, isFetching, isLoading } = useQuery({
		queryKey: ["getAll", city, i18n.language],
		queryFn: () => MainService.getAll(city, i18n.language),
		enabled: city.trim() !== "",
	});

	useEffect(() => {
		if (data && Array.isArray(data.list)) {
			const dailyData = data.list.filter((reading: { dt_txt: string }) =>
				reading.dt_txt.includes("9:00:00")
			);
			setWeatherInfo(dailyData);
		}
	}, [data, city]);

	if (isError) {
		return <CityNotFound />;
	}

	if (isLoading || isFetching) {
		return <Loader />;
	}

	return (
		<div>
			{weatherInfo.length > 0 ? (
				<>
					<WeatherDay city={city} weatherInfo={weatherInfo[0]} />
					<WeatherForecast weatherInfo={weatherInfo} />
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};
