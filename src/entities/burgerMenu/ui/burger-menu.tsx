import styles from "./burger-menu.module.scss";
import { IBurgerMenu } from "../model/types";

export const BurgerMenu = ({
	className = "",
	isActive,
	setIsActive,
}: IBurgerMenu) => {
	return (
		<button
			className={`${styles.burger} ${className} ${isActive ? styles.active : ""}`}
			onClick={() => {
				setIsActive(!isActive);
			}}>
			<span></span>
		</button>
	);
};
