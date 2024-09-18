import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./router.tsx";

const router = createBrowserRouter(routes);

const AppRouter = () => {
	return (
		<RouterProvider
			fallbackElement={<h1>Loading</h1>}
			future={{ v7_startTransition: true }}
			router={router}
		/>
	);
};

export default AppRouter;
