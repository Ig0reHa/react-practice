export interface I_Post {
	id: number
	title: string
	body: string
}

export interface I_Comment {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

export enum E_SortOptions {
	title = 'title',
	body = 'body',
	nosort = '',
}