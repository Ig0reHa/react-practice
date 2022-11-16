import React, {FC} from 'react';
import MyButton from "../button/MyButton";
import {usePagesArray} from "../../../hooks/usePagesArray";

interface PaginationProps {
	totalPages: number
	page: number
	changePage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({totalPages, page, changePage}) => {
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