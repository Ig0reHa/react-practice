import {useMemo} from "react";

export const usePagesArray = (totalPages) => {
	return useMemo(() => {
		let pagesArray = []
		for (let i = 0; i < totalPages; i++) {
			pagesArray.push(i + 1)
		}
		console.log('PagesArray Render')

		return pagesArray
	}, [totalPages])
}