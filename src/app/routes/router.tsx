import Layout from "@app/layout";
import { MainPage } from "@pages/main";
import { NotFoundPage } from "@pages/not-found";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <MainPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
];
