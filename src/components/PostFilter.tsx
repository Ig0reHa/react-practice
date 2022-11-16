import React, {FC} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import {E_SortOptions} from "../types/types";

interface PostFilterProps {
	filter: {sort: E_SortOptions, query: string}
	setFilter: (filter: {sort: E_SortOptions, query: string}) => void
}

const PostFilter: FC<PostFilterProps> = ({filter, setFilter}) => {
	return (
		<div style={{marginBottom: '30px'}}>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder="Search..."
			/>
			<MySelect
				value={filter.sort}
				onChange={selSort => setFilter({...filter, sort: selSort})}
				defaultValue="Sort by"
				option={[
					{value: E_SortOptions.title, name: 'By title'},
					{value: E_SortOptions.body, name: 'By body'},
				]}
			/>
		</div>
	);
};

export default PostFilter;