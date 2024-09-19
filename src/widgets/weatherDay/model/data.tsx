import { useTranslation } from "react-i18next";

import {
	FellLikeIcon,
	HumidityIcon,
	PressureIcon,
	SeaLevelIcon,
	VisibilityIcon,
	WindIcon,
} from "@shared/lib/ui/icons";
import { TWeatherData } from "@shared/types/weather";

const iconColor = "var(--text-color-light)";
const iconWidth = 40;
const iconHeight = 35;

export const useDataIcons = ({
	iconClass,
	weatherInfo,
}: {
	weatherInfo: TWeatherData;
	iconClass: string;
}) => {
	const { t } = useTranslation();

	return [
		{
			img: (
				<FellLikeIcon
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
				<WindIcon
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
				<VisibilityIcon
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
				<HumidityIcon
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
				<PressureIcon
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
				<SeaLevelIcon
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
