import React from 'react';
import MyButton from "./UI/button/MyButton";

interface PostItemProps {
	post: {
		id: number
		title: string
		body: string
	}
	number: number
}

const PostItem = (props: PostItemProps) => {
	return (
		<div className="post">
			<div className="post__content">
				<strong>{props.post.id}. {props.post.title}</strong>
				<div>{props.post.body}</div>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => props.remove(props.post)} style={{marginLeft: '15px'}}>Delete</MyButton>
			</div>
		</div>
	);
};

export default PostItem;