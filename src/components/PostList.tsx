import React, {FC, useRef} from 'react';
import PostItem from "./PostItem";
// @ts-ignore
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {I_Post} from "../types/types";

interface PostListProps {
	posts: I_Post[]
	title: string
	remove: (post: I_Post) => void
}

const PostList: FC<PostListProps> = ({posts, title, remove}) => {
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