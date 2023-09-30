import {
    createBrowserRouter, Navigate,
} from "react-router-dom";
import Category from "../components/Category/Category";
import CountryInfo from "../components/Countries/CountryInfo/CountryInfo";
import CountryInfoLayout from "../components/Countries/Layouts/CountryInfoLayout";
import LoginLayout from "../components/Login/LoginLayout";
import LoginPage from "../components/Login/LoginPage/LoginPage";
import Register from "../components/Register/Register";
import Terms from "../components/Terms/Terms";
import Destination from "../components/Travel/Destination";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            }

        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://travel-guru-server-8zt8mwgnh-khalequzzaman16-464-diuedubd.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'country',
        element: <CountryInfoLayout></CountryInfoLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><CountryInfo></CountryInfo></PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-guru-server-8zt8mwgnh-khalequzzaman16-464-diuedubd.vercel.app/countries/${params.id}`)
            }
        ]
    }
]);

export default router