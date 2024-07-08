import "./styles/index.scss";
import AppRouter from "./routes";
import Providers from "./providers";
import "../shared/lib/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = navigator.language.substring(0, 2);
    i18n.changeLanguage(userLanguage);
    document.documentElement.lang = userLanguage;
  });

  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
