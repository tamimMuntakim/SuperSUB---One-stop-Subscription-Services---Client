import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import MyProfile from "../pages/MyProfile";
import Loader from "../pages/Loader";
import ServiceDetails from "../pages/ServiceDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                path: "/service-details/:id",
                loader: () => fetch("/subscriptions.json"),
                element: <ServiceDetails></ServiceDetails>,
                hydrateFallbackElement: <Loader></Loader>,
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;