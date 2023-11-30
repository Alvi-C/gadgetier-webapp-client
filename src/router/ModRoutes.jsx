
import useAuth from '../hooks/useAuth';
import useModerator from '../hooks/useModerator';
import { Navigate, useLocation } from 'react-router-dom';

const ModRoutes = ({ children }) => {
    const { user, loading } = useAuth()
		const [isModerator, isModeratorLoading] = useModerator()

		const location = useLocation()

		if (loading || isModeratorLoading) {
			return <progress className='progress w-56'></progress>
		}
		if (user && isModerator) {
			return children
		}
		return <Navigate to='/login' state={{ from: location }} replace />
};

export default ModRoutes;