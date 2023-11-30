import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/shared/PrimaryButton'
import SectionHeading from '../../../components/shared/SectionHeading'
import TrendingProductCard from './TrendingProductCard'


const TrendingProducts = () => {

	const trends = [
		{
			_id: 1,
			name: 'Alex',
			email: 'test@test.com',
			userImage:
				'https://clicklovegrow.com/wp-content/uploads/2021/03/img-3445-edit.jpg',
			productName: 'Garmin Fenix smartwatch',
			image:
				'https://thegadgetflow.com/wp-content/uploads/2023/11/Garmin-Fenix-7S-Solar-Smartwatch-0001.jpg',
			description:
				'Tackle your fitness goals and outdoor adventures with the robust Garmin Fenix 7S Solar smartwatch. Crafted for smaller wrists, its solar charging lens powers all your training sessions.\n\n–Solar-powered endurance: Experience up to 11 days of battery life in smartwatch mode. With solar charging, you get an additional 3 days,\n\n–Designed for performance: Then, this athletic smartwatch features a 1.2” solar-charged display and a durable 42mm case. It meets U.S. military standards for thermal, shock, and water resistance.\n\n–Ready for your sport: Choose from preloaded activity profiles like trail running, swimming, biking or skiing, golfing, and surfing.\n\n–Elevated snow sports tracking: What’s more, the specialized profiles for backcountry skiing and snowboarding can auto-detect your ascent and descent. Start your run and let the watch do the rest.',
			tags: ['health', 'smart watch'],
			upVote: '11',
			downVote: '0',
			status: 'approved',
			reported: 'no',
			featured: 'yes',
		},
		{
			_id: 2,
			name: 'Alex',
			email: 'test@test.com',
			userImage:
				'https://clicklovegrow.com/wp-content/uploads/2021/03/img-3445-edit.jpg',
			productName: 'Vortex Steel Air Fryer ',
			image:
				'https://thegadgetflow.com/wp-content/uploads/2023/11/Instant-Vortex-Plus-6-Quart-Stainless-Steel-Air-Fryer-02.jpg',
			description:
				'Meet the Instant Vortex Plus 6-Quart Stainless Steel Air Fryer. It boasts convenient 6-in-1 functionality.\n\n–6-in-1 kitchen gadget: This Instant Vortex Plus Air Fryer isn’t just for air frying; it roasts, bakes, broils, reheats, and dehydrates.\n\n–Keep an eye on the food: The ClearCook window and built-in light let you peek into your cooking chamber without losing heat or flavor.\n\n–Say goodbye to kitchen smells: Thanks to Odor Erase Technology, cooking smells vanish, leaving your kitchen as fresh as your food tastes.\n–Crispy texture: With EvenCrisp Technology, your meals get that golden finish and delightful crunch every single time!\n\n–One-touch culinary wonders: Enjoy custom programs for delicious wings, roasted veggies, heavenly cookies, and more with just a tap!\n\n–Easy cleanup: The non-stick air fry basket is dishwasher safe, ensuring that cleanup is as effortless as the cooking.\n\nGet this 6-quart air fryer for efficient, tasty meals!',
			tags: ['kitchen', 'portable'],
			upVote: '12',
			downVote: '0',
			status: 'pending',
			reported: 'no',
			featured: 'no',
		},
		{
			_id: 3,
			name: 'Alex',
			email: 'test@test.com',
			userImage:
				'https://clicklovegrow.com/wp-content/uploads/2021/03/img-3445-edit.jpg',
			productName: 'Morrama reality glasses ',
			image:
				'https://thegadgetflow.com/wp-content/uploads/2023/11/Morrama-Lab-Iss-02.jpg',
			description:
				'Meet the Morrama Lab Issé mixed reality glasses. It features a future-facing design with lenses that swap out.\n\n–Tailored mixed reality at your fingertips: This mixed reality wearable isn’t just tech; it’s a style statement. With customizable lenses and frames, you can adapt Issé to match your preferences.\n\n–Options that fit your style: Issé offers 2 distinct designs. The first is a sleek metallic frame with a vibrant neon stripe. The other has an organic, softer form.\n\n–Sounds that move with you: Feel the sound through bone conduction in the arms of the frame. You get an immersive experience without the need for bulky headphones.\n\n–Sustainable materials: Meanwhile, the frames feature bio-materials that can be digested by bacteria or break down.\n\nIssé from Morrama Labs combines innovation with style, offering futuristic experiences!',
			tags: ['ai', 'eyeware', 'cool gadget'],
			upVote: '14',
			downVote: '0',
			status: 'pending',
			reported: 'no',
			featured: 'no',
		},
		{
			_id: 4,
			name: 'Jahedul Huda Chowdhury',
			email: 'aroheee@gmail.com',
			userImage:
				'https://lh3.googleusercontent.com/a/ACg8ocI1xYYDV76Ka3dBRtmFz2FFerBTnWCYy6WdXSNOqwys=s96-c',
			productName: 'Traveler Ghost Edition typewriter ',
			image:
				'https://thegadgetflow.com/wp-content/uploads/2023/11/Freewrite-Traveler-Ghost-Edition-Modern-Typewriter-02.jpg',
			description:
				'Meet the Freewrite Traveler Ghost Edition! It’s a transparent digital typewriter that’s ultraportable and visually stunning.\n\n–A Futuristic Nod: This Traveler’s unique design with a clear body is a nod to Y2K styles, inspiring your creativity.\n\n–All your favorite features: The Ghost Edition combines Traveler features with a jaw-dropping clear body and keyboard.\n\n–Clarity in Writing: Then, you’ll rediscover the joy of writing without distractions. Ghost’s full-size keyboard offers an optimized typing experience with tactile precision.\n\n–Save Anywhere, Everywhere: What’s more, this portable typewriter saves your writing locally and in the cloud. Once connected to Wi-Fi, your documents back up automatically.\n\n–Uninterrupted Writing: With its long-lasting battery, Ghost ensures your creative flow isn’t disturbed.\n\n–Multilingual Support: Meanwhile, this digital typewriter supports numerous languages and keyboard layouts, from QWERTZ to AZERTY and DVORAK.\n\nAttain your writing goals with the Freewrite Traveler Ghost Edition.',
			tags: ['office gadget', 'computer'],
			upVote: '12',
			downVote: '0',
			status: 'pending',
			reported: 'no',
			featured: 'no',
		},
		{
			_id: 5,
			name: 'Jahedul Huda Chowdhury',
			email: 'aroheee@gmail.com',
			userImage:
				'https://lh3.googleusercontent.com/a/ACg8ocI1xYYDV76Ka3dBRtmFz2FFerBTnWCYy6WdXSNOqwys=s96-c',
			productName: 'LUMIONIX camera trigger',
			image:
				'https://thegadgetflow.com/wp-content/uploads/2023/11/LUMIONIX-KOMET-Wireless-High-Speed-Camera-Trigger-01.jpg',
			description:
				'Designed by a passionate team of engineers, the LUMIONIX KOMET camera trigger will enhance your photography experience.\n\n \n– High-speed and timelapse mastery: It’s ideal for capturing fast-moving subjects and mastering the intricacies of timelapse photography.\n– Advanced sensor technology: It offers precision in capturing the perfect moment, allowing for adjustment of the threshold limit for ideal shots.\n– Universal compatibility: It mounts onto the camera’s hot shoe, employing a USB port for versatile use across various camera models.\n– Intuitive control: Access features through an on-board touchscreen app or a mobile application.\n– AI machine-learning integration: It recognizes visually similar images with EXIF suggestion and is capable of scaling and enhancing images. This invites contributors to build a vast dataset.\n\n \nIt resolves the hassle of multiple devices by incorporating features such as a built-in ND calculator, convenient content backup, and professional-grade app access for iOS and Android.\n\n',
			tags: ['cool gadget', 'photography'],
			upVote: '11',
			downVote: '0',
			status: 'pending',
			reported: 'no',
			featured: 'no',
		},
		{
			_id: 6,
			name: 'Jahedul Huda Chowdhury',
			email: 'aroheee@gmail.com',
			userImage:
				'https://lh3.googleusercontent.com/a/ACg8ocI1xYYDV76Ka3dBRtmFz2FFerBTnWCYy6WdXSNOqwys=s96-c',
			productName: 'Luxury waterproof speaker',
			image:
				'https://thegadgetflow.com/wp-content/uploads/2023/11/Porsche-Design-PDs20-Luxury-Waterproof-Speaker-01.jpg',
			description:
				'Transform your outdoor music experience with the Porsche Design Outdoor Speaker PDS20. It has a lightweight, compact design and premium sound quality.\n\n– Elegant and Durable Build: This luxury Bluetooth speaker boasts an elegant and robust design with its satin aluminum finish. It suits outdoor activities like hiking, camping, or beach outings.\n– Customizable Style: Included are 2 silicone rings in Porsche colors—Shade Green and Agate Grey—that can stylishly accentuate the speaker and serve as practical carrying aids.\n– Robust and Portable: With an IP67 dustproof and temporary waterproof rating, this cylindrical outdoor speaker stands up to rugged conditions. Plus, it offers up to 10 hours of battery life.\n– Easy, Intuitive Operation: Navigate seamlessly through your music via haptic icons.\n\nOverall, this luxury outdoor speaker offers a blend of durability, style, and performance.',
			tags: ['outdoor', 'speaker'],
			upVote: '0',
			downVote: '0',
			status: 'pending',
			reported: 'no',
			featured: 'no',
		},
	]


	return (
		<div className='container-size px-2 py-16 lg:px-8'>
			<SectionHeading title='Trending Products' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 row-gap-5 mb-16'>
				{trends.map(product => (
					<TrendingProductCard key={product._id} product={product} />
				))}
			</div>
			<Link to='/products' className='text-center'>
				<PrimaryButton title='View All Products' />
			</Link>
		</div>
	)
}

export default TrendingProducts
