import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/about" element={<About />}></Route>
			<Route path="/posts" element={<Posts />}></Route>
			<Route path="/posts/:id" element={<PostIdPage/>}></Route>
			<Route path="/*" element={<Error />}></Route>
		</Routes>
	);
};

export default AppRouter;