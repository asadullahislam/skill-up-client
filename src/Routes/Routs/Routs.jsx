import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../components/404Page/NotFound";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Coursemain from "../../components/Coursemain/Coursemain";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Main from "../../components/Main/Main";
import Purchase from "../../components/Puchase/Purchase";
import Register from "../../components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routs = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <Coursemain></Coursemain>,
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>
                    },
                    {
                        path: '/courses/course/:courseId',
                        loader: async ({ params }) => fetch(`https://skill-up-server-flax.vercel.app/course/${params.courseId}`),
                        element: <CourseDetail></CourseDetail>
                    }
                ]
            },
            {
                path: '/courses/course/:courseId/purchase',
                loader: async ({ params }) => fetch(`https://skill-up-server-flax.vercel.app/course/${params.courseId}`),
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])