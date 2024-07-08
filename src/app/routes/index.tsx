import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router.tsx";

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return (
    <main>
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true }}
        fallbackElement={<h1>Loading</h1>}
      />
    </main>
  );
};

export default AppRouter;
