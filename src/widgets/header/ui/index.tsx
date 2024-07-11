import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { syncState } from "../../../app/store/slices/citySlice.ts";
import { Link } from "react-router-dom";
import Magnifier from "../../../shared/lib/ui/icons/magnifier";
import { Search } from "../../../features/search";
import { BurgerMenu } from "../../../entities/burger-menu";
import { SelectLang } from "../../../features/select-lang";

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [city] = useState("");

  const handleCityChange = () => {
    dispatch(syncState(city));
  };

  return (
    <header className={styles.header}>
      <Link className={styles.header__title} title="WISICO" to="/">
        <i
          className={`${styles.header__title_image} ${"owf owf-804 owf-2x icon-style"}`}
        />
        WISICO
      </Link>
      <Search className={styles.header__input} city={city} />
      <div className={`${styles.header__nav} ${isActive ? styles.active : ""}`}>
        <SelectLang className={styles.header__select} />
        <Link className={styles.header__auth} to="/auth/login/">
          Login
        </Link>
      </div>
      <div className={styles.header__burger}>
        <button onClick={() => handleCityChange()} title={t("Search button")}>
          <Magnifier />
        </button>
        <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
      </div>
    </header>
  );
};
