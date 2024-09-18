import { lazy } from "react";

export const MainPage = lazy(() =>
	import("./ui/main.tsx").then(module => ({ default: module.Main }))
);
