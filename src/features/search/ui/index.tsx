import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { syncState } from "@app/store/slices/city-slice.ts";
import CITIES from "@shared/consts/cities/cities.ts";
import Magnifier from "@shared/lib/ui/icons/magnifier";

import ISearch from "./search.interface.ts";
import styles from "./Search.module.scss";

interface IForm {
	city: string;
}

export const Search = ({ className }: ISearch) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const { handleSubmit, register, setValue, watch } = useForm<IForm>({
		mode: "onBlur",
	});

	const cityValue = watch("city");

	function searchQuery(city: string = "") {
		return CITIES.filter(el => el.toLowerCase().includes(city.toLowerCase()));
	}

	const handleCityChange = ({ city }: IForm) => {
		dispatch(syncState(city));
	};

	return (
		<form
			className={styles.container}
			onSubmit={handleSubmit(handleCityChange)}>
			<div className={`${styles.search} ${className}`}>
				<input
					autoComplete="off"
					className={styles.search__input}
					placeholder={t("search.input")}
					title={t("search.input")}
					type="text"
					{...register("city", {
						required: `${t("search.city.empty")}`,
					})}
				/>
				<button
					className={styles.search__button}
					title={t("search.button")}
					type="submit">
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
						.map(city => (
							<button
								key={city}
								className={styles.suggestions__button}
								type={"submit"}
								onClick={() => setValue("city", city)}>
								{city}
							</button>
						))}
				</div>
			)}
		</form>
	);
};
