import { clsx } from "clsx";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "@shared/consts/languages";

import styles from "./select-language.module.scss";
import { ISelectLang } from "../model/types";

export const SelectLanguage = ({ className }: ISelectLang) => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const { i18n } = useTranslation();
	const [lang, setLang] = useState("en");
	const popoverRef = useRef<HTMLDivElement | null>(null);

	const languageChange = (lang: string) => {
		setLang(lang);
		i18n.changeLanguage(lang);
		setIsPopoverOpen(false);
	};

	const togglePopover = () => {
		setIsPopoverOpen(prev => !prev);
	};

	useEffect(() => {
		setLang(i18n.language);
		document.documentElement.lang = i18n.language;
	}, [i18n]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				popoverRef.current &&
				!popoverRef.current.contains(event.target as Node)
			) {
				setIsPopoverOpen(false);
			}
		};

		if (isPopoverOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isPopoverOpen]);

	return (
		<div ref={popoverRef} className={clsx(styles.select, className)}>
			<button className={styles.select__button} onClick={togglePopover}>
				{lang.toUpperCase()}
			</button>
			{isPopoverOpen && (
				<div className={styles.select__popover}>
					{LANGUAGES.map(el => (
						<button
							key={el}
							className={styles.select__popover__button}
							onClick={() => languageChange(el)}>
							{el.toUpperCase()}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
