import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import ISearch from "./search.interface.ts";
import styles from "./Search.module.scss";
import { syncState } from "../../../app/store/slices/citySlice.ts";
import Magnifier from "../../../shared/lib/ui/icons/magnifier";

interface IForm {
  city: string;
}

export const Search = ({ className }: ISearch) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<IForm>({ mode: "onBlur" });

  const handleCityChange = ({ city }: IForm) => {
    dispatch(syncState(city));
  };

  return (
    <form
      className={`${styles.search} ${className}`}
      onSubmit={handleSubmit(handleCityChange)}
    >
      <input
        className={styles.search__input}
        autoComplete="off"
        type="text"
        title={t("search.input")}
        placeholder={t("search.input")}
        {...register("city", {
          required: "Город не может быть пустым!",
        })}
      />
      <button
        className={styles.search__button}
        title={t("search.button")}
        type="submit"
      >
        <Magnifier
          className={styles.search__icon}
          color={"var(--icon-color)"}
        />
      </button>
    </form>
  );
};
