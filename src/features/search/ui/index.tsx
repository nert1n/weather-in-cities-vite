import styles from "./Search.module.scss";
import Magnifier from "../../../shared/lib/ui/icons/magnifier";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import ISearch from "./search.interface.ts";

export const Search = ({ className, city }: ISearch) => {
  const { t } = useTranslation();

  const nodeRef = useRef(null);

  const handleCitySave = (city: string) => {
    setCity(city);
  };

  return (
    <div className={`${styles.search} ${className}`}>
      <button
        className={styles.search__button}
        onClick={() => handleCityChange()}
        title={t("Search button")}
      >
        <Magnifier
          className={styles.search__icon}
          color={"var(--icon-color)"}
        />
      </button>
      <input
        className={styles.search__input}
        autoComplete="off"
        type="text"
        name="seatch_city"
        title={t("Search city")}
        placeholder={t("Search city")}
        ref={nodeRef}
        value={city}
        onChange={(e) => handleCitySave(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCityChange();
          }
        }}
      />
    </div>
  );
};
