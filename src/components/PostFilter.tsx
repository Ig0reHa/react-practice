import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
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
					{value: 'title', name: 'By title'},
					{value: 'body', name: 'By body'},
				]}
			/>
		</div>
	);
};

export default PostFilter;