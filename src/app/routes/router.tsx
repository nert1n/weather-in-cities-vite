import MainPage from "../../pages/main";
import NotFound from "../../pages/not-found";

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
