import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Diaries from "./pages/Diaries";
import Auth from "./pages/Auth";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Update from "./components/diaries/Update";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store";
import ProtectedRoute from "./components/ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <Add />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post/:id",
        element: (
          <ProtectedRoute>
            <Update />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
