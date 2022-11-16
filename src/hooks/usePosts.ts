import {useMemo} from "react";
import {E_SortOptions, I_Post} from "../types/types";

export const useSortedPosts = (posts: I_Post[], sort: E_SortOptions) => {
	return useMemo(() => {
		if(sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return posts
	}, [sort, posts])
}

export const usePosts = (posts: I_Post[], sort: E_SortOptions, query: string) => {
	const sortedPosts = useSortedPosts(posts, sort)

	return useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedPosts])
}