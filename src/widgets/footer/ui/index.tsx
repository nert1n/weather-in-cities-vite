import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        {t("footer.powered")}&nbsp;
        <a
          className={styles.footer__link}
          href="https://github.com/nert1n"
          title={t("footer.button.go_home")}
          target="_blank"
        >
          nert1n
        </a>
      </p>
      <p className={styles.footer__year}>© 2024</p>
    </footer>
  );
};
