import { useTranslation } from "react-i18next";

import styles from "./city-not-found.module.scss";

export const CityNotFound = () => {
	const { t } = useTranslation();

	return <h1 className={styles.main__notfound}>{t("search.city.notfound")}</h1>;
};
