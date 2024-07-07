import MainPage from "../../pages/main";
import LoginPage from "../../pages/login";
import ProfilePage from "../../pages/profile";
import RegistrationPage from "../../pages/registration";
import NotFound from "../../pages/not-found";

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
