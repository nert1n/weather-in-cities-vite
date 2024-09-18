import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Loader } from "@shared/lib/ui/components/loader";

import { routes } from "./router";

const router = createBrowserRouter(routes);

const AppRouter = () => (
	<RouterProvider
		fallbackElement={<Loader />}
		future={{ v7_startTransition: true }}
		router={router}
	/>
);

export default AppRouter;
