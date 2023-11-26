import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
			<div>
				<ul>
					<li>
						<Link to='/dashboard/user/userHome'>user home</Link>
					</li>
					<li>
						<Link to='/dashboard/moderator/modHome'>Mod home</Link>
					</li>
					<li>
						<Link to='/dashboard/admin/adminHome'>Admin home</Link>
					</li>
				</ul>
			</div>
		)
};

export default AboutUs;