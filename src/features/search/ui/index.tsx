import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import ISearch from "./search.interface.ts";
import styles from "./Search.module.scss";
import { syncState } from "../../../app/store/slices/citySlice.ts";
import Magnifier from "../../../shared/lib/ui/icons/magnifier";

export const Search = ({ className }: ISearch) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  const [cities, setCity] = useState("");

  const handleCitySave = (city: string) => {
    setCity(city);
  };

  const handleCityChange = () => {
    dispatch(syncState(cities));
  };

  return (
    <div className={`${styles.search} ${className}`}>
      <button
        className={styles.search__button}
        onClick={() => handleCityChange()}
        title={t("search.button")}
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
        title={t("search.input")}
        placeholder={t("search.input")}
        ref={nodeRef}
        value={cities}
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
