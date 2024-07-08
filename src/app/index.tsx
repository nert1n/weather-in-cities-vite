import "./styles/index.scss";
import AppRouter from "./routes";
import Providers from "./providers";
import "../shared/lib/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  let userLanguage = "en";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    userLanguage = navigator.language.substring(0, 2);
    document.documentElement.lang = userLanguage;
  });

  useEffect(() => {
    i18n.changeLanguage(userLanguage);
  }, [i18n, userLanguage]);

  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
