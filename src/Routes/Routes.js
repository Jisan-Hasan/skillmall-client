import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />,
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
                ],
            },
        ],
    },
]);
