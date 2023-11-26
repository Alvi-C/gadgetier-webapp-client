
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'


import { FiFolder } from 'react-icons/fi'
import { RiHome3Line } from 'react-icons/ri'
import { RiProfileLine } from 'react-icons/ri'
import { ImBoxAdd } from 'react-icons/im'
import { MdQueue } from 'react-icons/md'
import { MdReport } from 'react-icons/md'
import { MdManageAccounts } from 'react-icons/md'
import { RiCoupon3Fill } from 'react-icons/ri'
import { Link, Outlet } from 'react-router-dom'

const MainDashboard = () => {


	const userMenus = [
		{
			name: "Dashboard",
			link: '/dashboard/user/userHome',
			icon: RiHome3Line,
		},
		{
			name: "My profile",
			link: '/dashboard/user/profile',
			icon: RiProfileLine,
		},
		{
			name: 'Add product',
			link: '/dashboard/user/addProduct',
			icon: ImBoxAdd,
		},
		{
			name: 'My products',
			link: '/dashboard/user/productList',
			icon: FiFolder,
		},
	]

	const moderatorMenus = [
		{
			name: 'Dashboard',
			link: '/dashboard/moderator/modHome',
			icon: RiHome3Line,
		},
		{
			name: 'Product queue',
			link: '/dashboard/moderator/products',
			icon: MdQueue,
		},
		{
			name: 'Report check',
			link: '/dashboard/moderator/reports',
			icon: MdReport,
		},
	]

	const adminMenus = [
		{
			name: 'Dashboard',
			link: '/dashboard/admin/adminHome',
			icon: RiHome3Line,
		},
		{
			name: 'Manage user',
			link: '/dashboard/admin/manageUsers',
			icon: MdManageAccounts,
		},
		{
			name: 'Manage coupons',
			link: '/dashboard/admin/manageCoupons',
			icon: RiCoupon3Fill,
		},
	]

	console.log(moderatorMenus,adminMenus);

	const [open, setOpen] = useState(true)
	return (
		<section className='flex gap-6'>
			<div
				className={`bg-[#0e0e0e] min-h-screen ${
					open ? 'w-72' : 'w-16'
				} duration-500 text-gray-100 px-4`}
			>
				<div className='py-3 flex justify-end'>
					<HiMenuAlt3
						size={26}
						className='cursor-pointer'
						onClick={() => setOpen(!open)}
					/>
				</div>
				{/* user info section start*/}
				<div
					className={`flex items-start px-4 mb-5 transition-all duration-500 ${
						open ? 'opacity-100' : 'opacity-0 -translate-x-10'
					}`}
				>
					<img
						className='h-12 mt-5 w-auto rounded-full max-w-full align-middle'
						src='https://eliteadmin.themedesigner.in/demos/bt4/university/dist/images/users/11.jpg'
						alt=''
					/>
					<div className='flex ml-3 mt-6 flex-col'>
						<h3 className='font-medium'>Admin admin</h3>
						<p className='text-xs text-gray-500'>abc@example.com</p>
					</div>
				</div>
				{/* user info section end*/}
				<div className='mt-4 flex flex-col gap-4 relative'>
					{userMenus?.map((menu, index) => (
						<Link
							to={menu?.link}
							key={index}
							className={` ${
								menu?.margin && 'mt-5'
							} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
						>
							<div>{React.createElement(menu?.icon, { size: '20' })}</div>
							<h2
								style={{
									transitionDelay: `${index + 3}00ms`,
								}}
								className={`whitespace-pre duration-500 ${
									!open && 'opacity-0 translate-x-28 overflow-hidden'
								}`}
							>
								{menu?.name}
							</h2>
							<h2
								className={`${
									open && 'hidden'
								} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
							>
								{menu?.name}
							</h2>
						</Link>
					))}
				</div>
			</div>
			<div className='m-3 text-xl text-gray-900 font-semibold'>
				<Outlet />
			</div>
		</section>
	)
};

export default MainDashboard;