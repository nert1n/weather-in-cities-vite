import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { BurgerMenu } from "../../../entities/burger-menu";
import { Search } from "../../../features/search";
import { SelectLang } from "../../../features/select-lang";

export const Header = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<header className={styles.header}>
			<Link className={styles.header__title} title="WISICO" to="/">
				<i
					className={`${styles.header__title_image} ${"owf owf-804 owf-2x icon-style"}`}
				/>
				WISICO
			</Link>
			<Search className={styles.header__input} />
			<div className={`${styles.header__nav} ${isActive ? styles.active : ""}`}>
				<SelectLang className={styles.header__select} />
			</div>
			<div className={styles.header__burger}>
				<BurgerMenu isActive={isActive} setIsActive={setIsActive} />
			</div>
		</header>
	);
};
