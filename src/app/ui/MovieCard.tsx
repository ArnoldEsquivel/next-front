import Image from 'next/image'
import { Card, CardFooter } from '@nextui-org/react'
import { Movie } from '../lib/definitions'
import { fetchMoviesByTitle, fetchPopularMovies } from '../lib/movies'
import ComingSoon from '../../../public/coming-soon.jpg'
import MovieModal from './MovieModal'

export default async function MovieCard({ title, fetchType }: { title: string; fetchType: 'title' | 'popular' }) {
	let movies: Movie[] = []

	if (fetchType === 'title') {
		movies = await fetchMoviesByTitle(title)
	} else if (fetchType === 'popular') {
		movies = await fetchPopularMovies()
	}

	return (
		<div className='w-full flex flex-wrap justify-center gap-6 max-w-7xl pb-6'>
			{movies.map((movie: Movie) => (
				<Card
					key={movie.id}
					isFooterBlurred
					radius='lg'
					className='border-none relative overflow-hidden rounded-lg'
				>
					{movie.poster_path ? (
						<Image
							src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
							alt={movie.title}
							width={270}
							height={390}
							className='hover:scale-125 transition-transform duration-300 ease-in-out'
						/>
					) : (
						<Image
							src={ComingSoon}
							alt='Coming Soon'
							width={270}
							height={390}
							className='hover:scale-125 transition-transform duration-300 ease-in-out'
						/>
					)}
					<CardFooter className='before:bg-white/10 border-white/20 border-1 overflow-hidden p-0 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col'>
						<MovieModal movie={movie} />
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
