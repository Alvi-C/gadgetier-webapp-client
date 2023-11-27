
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import {
	userMenus,
	moderatorMenus,
	adminMenus,
	mainMenus,
} from './components/AllMenus'
import { Link, Outlet } from 'react-router-dom'

const MainDashboard = () => {
	const [open, setOpen] = useState(true)


	return (
		<div className='flex'>
			<div
				className={`bg-[#0e0e0e] min-h-screen ${
					open ? 'w-60' : 'w-16'
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
					className={`flex flex-col lg:flex-row items-center lg:items-start mb-5 transition-all duration-500 ${
						open ? 'opacity-100' : 'opacity-0 -translate-x-10'
					}`}
				>
					<img
						className='h-12 mt-5 w-auto rounded-full align-middle'
						src='https://eliteadmin.themedesigner.in/demos/bt4/university/dist/images/users/11.jpg'
						alt=''
					/>
					<div className='flex lg:ml-3 mt-2 lg:mt-6 flex-col'>
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
							} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-green-600 rounded-md`}
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
				<hr className='my-5 border-green-400/50 w-3/4' />
				<div className='mt-4 flex flex-col gap-4 relative'>
					{moderatorMenus?.map((menu, index) => (
						<Link
							to={menu?.link}
							key={index}
							className={` ${
								menu?.margin && 'mt-5'
							} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-green-600 rounded-md`}
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
				<hr className='my-5 border-green-400/50 w-3/4' />
				<div className='mt-4 flex flex-col gap-4'>
					{adminMenus?.map((menu, index) => (
						<Link
							to={menu?.link}
							key={index}
							className={` ${
								menu?.margin && 'mt-5'
							} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-green-600 rounded-md`}
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
				<hr className='my-5 border-green-400/50 w-3/4' />
				{/* main site navigation*/}
				<div className='mt-4 flex flex-col gap-4 relative'>
					{mainMenus?.map((menu, index) => (
						<Link
							to={menu?.link}
							key={index}
							className={` ${
								menu?.margin && 'mt-5'
							} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-green-600 rounded-md`}
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
			<div className='w-full'>
				<Outlet />
			</div>
		</div>
	)
};

export default MainDashboard;