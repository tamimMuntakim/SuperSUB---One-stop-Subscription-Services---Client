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
import PrivateRoute from "../providers/PrivateRoute";
import MyServices from "../pages/MyServices";

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
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>,
            },
            {
                path: "/service-details/:id",
                loader: () => fetch("/subscriptions.json"),
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path: "/my-services",
                loader: () => fetch("/myServices.json"),
                element: <PrivateRoute>
                    <MyServices></MyServices>
                </PrivateRoute>,
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