import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./router.tsx";

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return (
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
      fallbackElement={<h1>Loading</h1>}
    />
  );
};

export default AppRouter;
