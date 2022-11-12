import React, {useRef} from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
	if (!posts.length) {
		return ( <h1 style={{textAlign: 'center', margin: '30px'}}>No posts</h1> )
	}

	return (
		<div>
			<h1 style={{
				textAlign: 'center',
				marginBottom: '30px',
				marginTop: '30px'}
			}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) =>
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post"
					>
						<PostItem remove={remove} post={post}/>
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	);
};

export default PostList;