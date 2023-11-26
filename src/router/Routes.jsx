import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/main/MainLayout';
import ErrorPage from '../pages/othersPage/ErrorPage';
import HomaPage from '../pages/homepage/HomaPage';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ProductsPage from '../pages/productsPage/ProductsPage';
import ProductDetails from '../pages/productDetails/ProductDetails';
import MainDashboard from '../layouts/dashboard/MainDashboard';
import AddUserProduct from '../pages/user/components/AddUserProduct';
import UserProductList from '../pages/user/components/UserProductList';
import ModProductApproval from '../pages/modarator/components/ModProductApproval';
import ModManageReport from '../pages/modarator/components/ModManageReport';
import ManageUsers from '../pages/admin/components/ManageUsers';
import ManageCoupons from '../pages/admin/components/ManageCoupons';
import AboutUs from '../pages/othersPage/AboutUs';
import PrivacyPage from '../pages/othersPage/PrivacyPage';
import ContactPage from '../pages/othersPage/ContactPage';
import UserProfile from '../pages/user/components/UserProfile';
import UserHome from '../pages/user/UserHome';
import ModaratorHome from '../pages/modarator/ModaratorHome';
import AdminHome from '../pages/admin/AdminHome';



const Routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomaPage />,
			},
			{
				path: '/products',
				element: <ProductsPage />,
			},
			{
				path: '/products/:id',
				element: <ProductDetails />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <Signup />,
            },
            {
                path: '/about',
                element: <AboutUs/>
            },
            {
                path: '/privacy',
                element: <PrivacyPage/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            }
		],
	},
	{
		path: '/dashboard',
		element: <MainDashboard />,
		children: [
			//---------normal user's routes-------------------
			{
				path: '/dashboard/user/userHome',
				element: <UserHome/>,
            },
            {
                path: '/dashboard/user/profile',
                element: <UserProfile/>
            },
			{
				path: '/dashboard/user/addProduct',
				element: <AddUserProduct />,
			},
			{
				path: '/dashboard/user/productList',
				element: <UserProductList />,
			},

			//---------modaretor's routes-------------------
			{
				path: '/dashboard/moderator/modHome',
				element: <ModaratorHome/>,
			},
			{
				path: '/dashboard/moderator/products',
				element: <ModProductApproval />,
			},
			{
				path: '/dashboard/moderator/reports',
				element: <ModManageReport />,
			},

            //---------admin's routes-------------------
            {
                path: '/dashboard/admin/adminHome',
                element: <AdminHome/>
            },
            {
                path: '/dashboard/admin/manageUsers',
                element: <ManageUsers/>
            },
            {
                path: '/dashboard/admin/manageCoupons',
                element: <ManageCoupons/>
            }
		],
	},
])


export default Routes;