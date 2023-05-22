import {BrowserRouter, Router, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from '../pages/homePage';
import Counter from '../pages/counter';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/counter",
        element: <Counter />,
    }
])
export default function SiteRouter() {
    return(
        <RouterProvider router={router} />
    )
}