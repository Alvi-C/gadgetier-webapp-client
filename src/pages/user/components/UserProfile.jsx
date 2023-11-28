
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
const UserProfile = () => {

	const { user } = useAuth();
	const axiosPublic = useAxiosPublic();

	const { data: userData } = useQuery({
		queryKey: ['userData', user?.email],
		queryFn: async () => {
			const res = await axiosPublic.get(`/users/${user?.email}`);
			return res.data;
		},
	})

    return (
			<div className='min-h-screen flex items-center justify-center bg-green-700'>
				<div className='bg-white overflow-hidden shadow rounded-lg border'>
					<div className='px-4 py-5 sm:px-6'>
						<h3 className='text-lg leading-6 font-medium text-gray-900'>
							Your Profile
						</h3>
						<p className='mt-1 max-w-2xl text-sm text-gray-500'>
							This is some information you have provided.
						</p>
					</div>
					<div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
						<div className='sm:divide-y sm:divide-gray-200'>
							<div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<div className='text-sm font-medium text-gray-500'>
									Full name
								</div>
								<div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									{userData?.name}
								</div>
							</div>
							<div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<div className='text-sm font-medium text-gray-500'>
									Email address
								</div>
								<div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									{userData?.email}
								</div>
							</div>
							<div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<div className='mt-1 text-sm font-medium text-gray-500'>
									Membership
								</div>
								<div className='text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">$10 Subscribe/mo</button>
								</div>
							</div>
							<div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<div className='text-sm font-medium text-gray-500'>Status</div>
								<div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									{userData?.status}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
};

export default UserProfile;


