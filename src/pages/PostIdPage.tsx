import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})

	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return (
		<div className="post-page">
			<h1>Post - {params.id}</h1>
			{isLoading
				? <Loader/>
				: <p>{post.title} - {post.body}</p>
			}
			<h1>Comments</h1>
			{isComLoading
				? <Loader/>
				: <div>{comments.map(c =>
					<div key={c.id} className="post-page__comment">
						<h5>{c.email}</h5>
						<p>{c.body}</p>
					</div>
				)}
				</div>
			}
		</div>
	);
};

export default PostIdPage;