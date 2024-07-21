import LoginPage from "../../pages/login";
import MainPage from "../../pages/main";
import NotFound from "../../pages/not-found";
import ProfilePage from "../../pages/profile";
import RegistrationPage from "../../pages/registration";

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "auth",
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "registration", element: <RegistrationPage /> },
    ],
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
