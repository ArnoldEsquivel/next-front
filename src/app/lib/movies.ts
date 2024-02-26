export async function fetchPopularMovies() {
	try {
		const response = await fetch('http://localhost:3001/movie/popular')
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error fetching popular movies:', error)
		throw error
	}
}

export async function fetchMoviesByTitle(title: string) {
	try {
		const response = await fetch(`http://localhost:3001/movie/search?title=${title}`)
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error fetching movies by title:', error)
		throw error
	}
}
