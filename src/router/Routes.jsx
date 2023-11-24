import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/main/MainLayout';



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
    }
])


export default Routes;