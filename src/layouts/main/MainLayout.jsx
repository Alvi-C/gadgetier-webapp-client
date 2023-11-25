
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;