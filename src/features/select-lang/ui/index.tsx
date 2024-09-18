import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ISelectLang from "./select-lang.interface.ts";
import styles from "./SelectLang.module.scss";
import { LANGUAGES } from "../../../shared/consts/languages.ts";

export const SelectLang = ({ className }: ISelectLang) => {
	const { i18n, t } = useTranslation();
	const [lang, setLang] = useState("en");

	const languageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const language = e.target.value;
		setLang(language);
		i18n.changeLanguage(language);
	};

	useEffect(() => {
		setLang(i18n.language);
		document.documentElement.lang = i18n.language;
	}, [i18n]);

	return (
		<select
			className={`${styles.select} ${className}`}
			id="selectLang"
			name="selectLang"
			title={t("Button select language")}
			value={lang}
			onChange={e => languageChange(e)}>
			{LANGUAGES.map(el => {
				return (
					<option key={el} value={el}>
						{el.toUpperCase()}
					</option>
				);
			})}
		</select>
	);
};
