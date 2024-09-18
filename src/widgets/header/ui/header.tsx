import { useState } from "react";
import { Link } from "react-router-dom";

import { BurgerMenu } from "@entities/burgerMenu";
import { Search } from "@features/search";
import { SelectLanguage } from "@features/selectLanguage";

import styles from "./header.module.scss";

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
				<SelectLanguage className={styles.header__select} />
			</div>
			<div className={styles.header__burger}>
				<BurgerMenu isActive={isActive} setIsActive={setIsActive} />
			</div>
		</header>
	);
};
