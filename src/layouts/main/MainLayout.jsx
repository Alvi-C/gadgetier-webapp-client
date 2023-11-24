
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navigation/Navbar';

const MainLayout = () => {
    return (
        <div>
            <h2>Main layout</h2>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default MainLayout;