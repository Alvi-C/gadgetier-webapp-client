
import { FiFolder } from 'react-icons/fi'
import { HiHome } from 'react-icons/hi'
import { RiProfileLine } from 'react-icons/ri'
import { ImBoxAdd } from 'react-icons/im'
import { MdQueue } from 'react-icons/md'
import { MdReport } from 'react-icons/md'
import { MdManageAccounts } from 'react-icons/md'
import { RiCoupon3Fill } from 'react-icons/ri'
import { AiFillDashboard } from 'react-icons/ai'
import { FaBoxOpen } from 'react-icons/fa'
import { MdContactMail } from 'react-icons/md'
import { TbBoxPadding } from 'react-icons/tb'
import { RiFileCopyFill } from 'react-icons/ri'


export const userMenus = [
	{
		name: 'Dashboard',
		link: '/dashboard/user/userHome',
		icon: AiFillDashboard,
	},
	{
		name: 'My profile',
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

export const moderatorMenus = [
	{
		name: 'Dashboard',
		link: '/dashboard/moderator/modHome',
		icon: AiFillDashboard,
	},
	{
		name: 'Product review',
		link: '/dashboard/moderator/productsReview',
		icon: MdQueue,
	},
	{
		name: 'Report check',
		link: '/dashboard/moderator/reports',
		icon: MdReport,
	},
]

export const adminMenus = [
	{
		name: 'Dashboard',
		link: '/dashboard/admin/adminHome',
		icon: AiFillDashboard,
	},
	{
		name: 'Manage user',
		link: '/dashboard/admin/manageUsers',
		icon: MdManageAccounts,
	},
	{
		name: 'Add coupon',
		link: '/dashboard/admin/addCoupon',
		icon: TbBoxPadding,
	},
	{
		name: 'All coupons',
		link: '/dashboard/admin/allCoupons',
		icon: RiFileCopyFill,
	},
	{
		name: 'Manage coupons',
		link: '/dashboard/admin/manageCoupons',
		icon: RiCoupon3Fill,
	},
]

export const mainMenus = [
	{
		name: 'Gadgetier Home',
		link: '/',
		icon: HiHome,
	},
	{
		name: 'Products',
		link: '/products',
		icon: FaBoxOpen,
	},
	{
		name: 'Contact us',
		link: '/contact',
		icon: MdContactMail,
	},
]