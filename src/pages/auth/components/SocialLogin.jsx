
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const SocialLogin = () => {

	const { signInWithGoogle } = useAuth()
	const axiosPublic = useAxiosPublic()

	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || '/'

	const handleGoogleSignIn = () => {
		signInWithGoogle().then(result => {
			console.log(result.user)
			const userInfo = {
				name: result.user?.displayName,
				email: result.user?.email,
				image: result.user?.photoURL,
				role: 'user'
			}
			axiosPublic.post('/users', userInfo).then(res => {
				if (res.data.insertedId) {
					console.log('user added: ', res.data)
					navigate(from, { replace: true })
				}
			})
			navigate(from, { replace: true })
		})
	}

	return (
		<div>
			<button
				onClick={handleGoogleSignIn}
				className='w-full flex justify-center py-2 border gap-2 border-slate-200 rounded-lg text-slate-500 hover:border-slate-300 hover:text-slate-600 hover:shadow transition duration-150'
			>
				<img
					className='w-6 h-6'
					src='https://www.svgrepo.com/show/475656/google-color.svg'
					loading='lazy'
					alt='google logo'
				/>
				<span>Login with Google</span>
			</button>
		</div>
	)
}

export default SocialLogin

