import { useTranslation } from "react-i18next";

import FellLike from "@shared/lib/ui/icons/fell_like";
import Humidity from "@shared/lib/ui/icons/humidity";
import Pressure from "@shared/lib/ui/icons/pressure";
import SeaLevel from "@shared/lib/ui/icons/sea_level";
import Visibility from "@shared/lib/ui/icons/visibility";
import Wind from "@shared/lib/ui/icons/wind";

import { WeatherReading } from "./types.ts";

const iconColor = "var(--text-color-light)";
const iconWidth = 40;
const iconHeight = 35;

export const useDataIcons = ({
	iconClass,
	weatherInfo,
}: {
	weatherInfo: WeatherReading;
	iconClass: string;
}) => {
	const { t } = useTranslation();

	return [
		{
			img: (
				<FellLike
					className={iconClass}
					color={iconColor}
					height={iconHeight}
					width={iconWidth}
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
					height={iconHeight}
					width={iconWidth}
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
					height={iconHeight}
					width={iconWidth}
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
					height={iconHeight}
					width={iconWidth}
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
					height={iconHeight}
					width={iconWidth}
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
					height={iconHeight}
					width={iconWidth}
				/>
			),
			name: t("sea.level"),
			info: Math.round(weatherInfo.main.sea_level),
		},
	];
};
