import { lazy } from "react";

export const NotFoundPage = lazy(() =>
	import("./ui/not-found.tsx").then(module => ({ default: module.NotFound }))
);
