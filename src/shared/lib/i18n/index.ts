import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { resources } from "./translations";

// eslint-disable-next-line import/no-named-as-default-member
i18next.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",

	debug: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
