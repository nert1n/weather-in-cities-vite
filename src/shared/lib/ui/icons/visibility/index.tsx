type IVisibility = {
	height?: number;
	width?: number;
	color?: string;
	className?: string;
};

const DEFAULT_COLOR = "black";
const DEFAULT_HEIGHT = 28;
const DEFAULT_WIDTH = 46;

export const VisibilityIcon = ({
	className,
	color = DEFAULT_COLOR,
	height = DEFAULT_HEIGHT,
	width = DEFAULT_WIDTH,
}: IVisibility) => {
	return (
		<div className={className}>
			<svg
				fill="none"
				height={height}
				viewBox="0 0 46 28"
				width={width}
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M22.9999 26C14.0193 26 6.19994 21.1226 1.99994 13.8839C6.19994 6.64516 14.0193 1.76774 22.9999 1.76774C31.9806 1.76774 39.7999 6.64516 43.9999 13.8839C39.7999 21.1226 31.9806 26 22.9999 26Z"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="3"
				/>
				<path
					d="M22.9997 6.58711C27.0296 6.58711 30.2965 9.85399 30.2965 13.8839C30.2965 17.9138 27.0296 21.1807 22.9997 21.1807C18.9698 21.1807 15.7029 17.9138 15.7029 13.8839C15.7029 9.85399 18.9698 6.58711 22.9997 6.58711Z"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="3"
				/>
			</svg>
		</div>
	);
};
