import { initReactI18next } from "react-i18next";
import { resources } from "./translations";
import i18next from "i18next";

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
