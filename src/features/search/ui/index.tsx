import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import ISearch from "./search.interface.ts";
import styles from "./Search.module.scss";
import { syncState } from "../../../app/store/slices/citySlice.ts";
import CITIES from "../../../shared/consts/cities/cities.ts";
import Magnifier from "../../../shared/lib/ui/icons/magnifier";

interface IForm {
  city: string;
}

export const Search = ({ className }: ISearch) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, setValue } = useForm<IForm>({
    mode: "onBlur",
  });

  const cityValue = watch("city");

  function searchQuery(city: string = "") {
    return CITIES.filter((el) => el.toLowerCase().includes(city.toLowerCase()));
  }

  const handleCityChange = ({ city }: IForm) => {
    dispatch(syncState(city));
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(handleCityChange)}
    >
      <div className={`${styles.search} ${className}`}>
        <input
          className={styles.search__input}
          autoComplete="off"
          type="text"
          title={t("search.input")}
          placeholder={t("search.input")}
          {...register("city", {
            required: `${t("search.city.empty")}`,
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
      </div>
      {cityValue === "" ? (
        ""
      ) : (
        <div className={styles.suggestions}>
          {searchQuery(cityValue).slice(0, 10).length === 0 ? (
            <p className={styles.suggestions__notfound}>
              {t("search.city.notfound")}
            </p>
          ) : (
            ""
          )}
          {searchQuery(cityValue)
            .slice(0, 10)
            .map((city) => (
              <button
                className={styles.suggestions__button}
                key={city}
                type={"submit"}
                onClick={() => setValue("city", city)}
              >
                {city}
              </button>
            ))}
        </div>
      )}
    </form>
  );
};
