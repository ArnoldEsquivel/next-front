export interface Movie {
	id: number
	title: string
	overview: string
	release_date: string
	backdrop_path: string
	poster_path: string
	genre_ids: number[]
	adult: boolean
	original_language: string
	original_title: string
	popularity: number
	video: boolean
	vote_average: number
	vote_count: number
}
