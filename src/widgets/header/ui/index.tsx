import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { syncState } from "../../../app/store/slices/citySlice.ts";
import { Link } from "react-router-dom";
import Magnifier from "../../../shared/lib/ui/icons/magnifier";

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [city, setCity] = useState("");

  const handleCitySave = (city: string) => {
    setCity(city);
  };

  const handleCityChange = () => {
    dispatch(syncState(city));
  };

  return (
    <header className={styles.header}>
      <Link className={styles.header__title} title="WISICO" to="/">
        <i className="owf owf-804 owf-2x icon-style" />
        WISICO
      </Link>
      <div className={styles.header__input}>
        <button onClick={() => handleCityChange()} title={t("Search button")}>
          <Magnifier />
        </button>
        <input
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
      <div className={`${styles.header__nav} ${isActive ? styles.active : ""}`}>
        {/*<SelectLang />*/}
        {/*<AuthButton />*/}
      </div>
      <div className={styles.header__burger}>
        <button onClick={() => handleCityChange()} title={t("Search button")}>
          <Magnifier />
        </button>
        <button
          className={`${styles.burger} ${isActive ? styles.active : ""}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};
