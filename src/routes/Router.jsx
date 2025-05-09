import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import MyProfile from "../pages/MyProfile";
import Loader from "../pages/Loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("/subscriptions.json"),
                element: <Home></Home>,
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path: "/my-profile",
                element: <MyProfile></MyProfile>,
            },
            {
                path: "/loader",
                element: <Loader></Loader>,
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;