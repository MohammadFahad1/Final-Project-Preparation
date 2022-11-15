import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <h1 className="text-5xl font-bold text-primary">Home Page</h1>
            },
            {
                path: '/about',
                element: <h1 className="text-5xl font-bold text-primary">About Page</h1>
            },
            {
                path: '*',
                element: <h1 className="text-5xl font-bold text-danger">404 Not Found</h1>
            },
        ]
    }
])

export default router;