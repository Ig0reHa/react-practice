import React from 'react';
import MyButton from "../button/MyButton";
import {usePagesArray} from "../../../hooks/usePagesArray";

const Pagination = ({totalPages, page, changePage}) => {
	let pagesArray = usePagesArray(totalPages)
	return (
		<div className="pagi_buttons">
			{pagesArray.map(p =>
				<MyButton
					onClick={() => changePage(p)}
					key={p}
					className={page === p ? 'pagi pagi__current' : 'pagi'}
				>
					{p}
				</MyButton>
			)}
		</div>
	);
};

export default Pagination;