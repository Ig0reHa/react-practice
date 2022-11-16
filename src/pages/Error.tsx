import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
	return (
		<div>
			<Link to={"/posts"}>
				<h1 style={{color: 'red'}}>Page not found</h1>
			</Link>
		</div>
	);
};

export default Error;