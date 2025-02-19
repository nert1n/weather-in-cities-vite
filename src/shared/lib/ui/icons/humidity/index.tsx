type IHumidity = {
	height?: number;
	width?: number;
	color?: string;
	className?: string;
};

const DEFAULT_COLOR = "black";
const DEFAULT_HEIGHT = 20;
const DEFAULT_WIDTH = 14;

export const HumidityIcon = ({
	className,
	color = DEFAULT_COLOR,
	height = DEFAULT_HEIGHT,
	width = DEFAULT_WIDTH,
}: IHumidity) => {
	return (
		<div className={className}>
			<svg
				fill="none"
				height={height}
				viewBox="0 0 14 20"
				width={width}
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.98448 20C3.13526 20 0 16.8432 0 12.9362C0 10.1232 3.5388 4.05954 5.64967 0.746422C6.1153 -0.00371786 7.10865 -0.222509 7.85366 0.246329C8.03991 0.371352 8.22616 0.558887 8.35033 0.746422C10.4612 4.09079 14 10.1232 14 12.9362C13.9379 16.8432 10.8337 20 6.98448 20ZM6.98448 1.27777C6.89135 1.27777 6.76718 1.34028 6.73614 1.43405C3.32151 6.8413 1.30377 11.1546 1.30377 12.9362C1.30377 16.093 3.84922 18.6873 6.98448 18.6873C10.1197 18.6873 12.6962 16.1243 12.6962 12.9362C12.6962 11.1234 10.6785 6.8413 7.26386 1.43405C7.20177 1.34028 7.04656 1.27777 6.98448 1.27777Z"
					fill={color}
				/>
			</svg>
		</div>
	);
};
