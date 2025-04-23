import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Diaries from "./pages/Diaries";
import Auth from "./pages/Auth";
import Add from "./pages/Add";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/diaries", element: <Diaries /> },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
