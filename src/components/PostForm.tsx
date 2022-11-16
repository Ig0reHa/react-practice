import React, {FC, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {I_Post} from "../types/types";

interface PostFormProps {
	create: (post: I_Post) => void
}

const PostForm: FC<PostFormProps> = ({create}) => {
	const [post, setPost] = useState({title: '', body: ''})

	const addNewPost = (e: MouseEvent) => {
		e.preventDefault()
		const newPost = { id: Date.now(), ...post }
		create(newPost)
		setPost({title: '', body: ''})
	}

	return (
		<form>
			<MyInput
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
				placeholder="Post name"/>
			<MyInput
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				placeholder="Post description"
			/>
			<MyButton onClick={addNewPost}>Add post</MyButton>
		</form>
	);
};

export default PostForm;

