import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/main/MainLayout';
import ErrorPage from '../pages/othersPage/ErrorPage';
import HomaPage from '../pages/homepage/HomaPage';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ProductsPage from '../pages/productsPage/ProductsPage';
import ProductDetails from '../pages/productDetails/ProductDetails';



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomaPage />
            },
            {
                path: "/products",
                element: <ProductsPage/>
            },
            {
                path: "/products/:id",
                element: <ProductDetails/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <Signup/>
            }
        ]
    }
])


export default Routes;