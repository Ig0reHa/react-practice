import {createRef, useEffect, useState} from "react";
import {E_SortOptions, I_Post} from "../types/types";
import {useFetching} from "../hooks/useFetching";
import {usePosts} from "../hooks/usePosts";
import {useObserver} from "../hooks/useObserver";
import {getPageCount} from "../utils/pages";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import PostService from "../API/PostService";
import MySelect from "../components/UI/select/MySelect";
import '../styles/App.css'

function Posts() {
	const [posts, setPosts] = useState<I_Post[]>([])
	const [filter, setFilter] = useState<{sort: E_SortOptions, query: string}>({sort: E_SortOptions.nosort, query: ''})
	const [modal, setModal] = useState<boolean>(false)
	const [totalPages, setTotalPages] = useState<number>(0)
	const [limit, setLimit] = useState<number>(10)
	const [page, setPage] = useState<number>(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const lastElement = createRef<HTMLDivElement>()

	const [fetchPosts, isPostLoading, postError] = useFetching(async (limit: number, page: number) => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page, limit])

	const createPost = (newPost: I_Post) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = (post: I_Post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page: number) => {
		setPage(page)
	}

	return (
		<div className="App">
			<MyButton onClick={() => setModal(true)}>Create post</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{margin: '15px 0'}}/>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue="Number of elements on page"
				option={[
					{value: 5, name: '5'},
					{value: 10, name: '10'},
					{value: 25, name: '25'},
					{value: -1, name: 'Show all'},
				]}
			/>
			{postError &&
				<h1>Error has occurred: <>${postError}</></h1>
			}
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts list'}/>
			<div ref={lastElement}></div>
			{isPostLoading &&
				<div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
			}
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages}
			/>
		</div>
	)
}

export default Posts
