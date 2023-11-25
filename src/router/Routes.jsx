import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/main/MainLayout';
import ErrorPage from '../pages/othersPage/ErrorPage';
import HomaPage from '../pages/homepage/HomaPage';



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomaPage />
            }
        ]
    }
])


export default Routes;