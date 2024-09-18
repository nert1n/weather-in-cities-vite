import { useTranslation } from "react-i18next";

import styles from "./Footer.module.scss";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<p className={styles.footer__text}>
				{t("footer.powered")}&nbsp;
				<a
					className={styles.footer__link}
					href="https://github.com/nert1n"
					rel="noreferrer"
					target="_blank"
					title={t("footer.button.go_home")}>
					nert1n
				</a>
			</p>
			<p className={styles.footer__year}>© 2024</p>
		</footer>
	);
};
