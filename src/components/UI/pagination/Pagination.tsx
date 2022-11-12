import React from 'react';
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
	let pagesArray = getPagesArray(totalPages)
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