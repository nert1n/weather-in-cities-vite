import "./styles/index.scss";

import "../shared/lib/i18n";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Providers from "./providers";
import AppRouter from "./routes";

function App() {
	const { i18n } = useTranslation();

	const [userLanguage] = useState("en");

	const userLanguageRef = useRef(navigator.language.substring(0, 2));

	useEffect(() => {
		document.documentElement.lang = userLanguageRef.current;
	}, []);

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
