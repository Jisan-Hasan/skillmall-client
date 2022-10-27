import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import CourseDetails from "../pages/Courses/CourseDetails";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/courses",
                element: <CourseLayout />,
                children: [
                    {
                        index: true,
                        element: <Courses />,
                        loader: () => fetch("http://localhost:5000/allcourses"),
                    },
                    {
                        path: "/courses/:id",
                        loader: ({ params }) =>
                            fetch(`http://localhost:5000/course/${params.id}`),
                        element: <CourseDetails />,
                    },
                    {
                        path: "/courses/checkout/:id",
                        loader: ({ params }) =>
                            fetch(`http://localhost:5000/course/${params.id}`),
                        element: (
                            <PrivateRoutes>
                                <Checkout />
                            </PrivateRoutes>
                        ),
                    },
                ],
            },
        ],
    },
]);
