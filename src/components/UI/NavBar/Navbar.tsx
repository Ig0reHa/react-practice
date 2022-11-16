import React, {FC} from 'react';
import MyButton from "../button/MyButton";
import {useMatch, useNavigate} from "react-router-dom";

const Navbar: FC = () => {
	const navigate = useNavigate()
	const match = useMatch("/about")

	return (
		<div className="navbar">
			<div className="navbar__links">
				<MyButton onClick={() => navigate("/about")} className={Boolean(match) ? "active" : ""}>About</MyButton>
				<MyButton onClick={() => navigate("/posts")} className={Boolean(!match) ? "active" : ""}>Posts</MyButton>
			</div>
		</div>
	);
};

export default Navbar;