import MovieCard from './ui/MovieCard'
import { Suspense } from 'react'
import CardSkeleton from './ui/CardSkeleton'

export default function PopularPage() {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center pt-3'>
			<Suspense fallback={<CardSkeleton />}>
				<MovieCard title={''} fetchType='popular' />
			</Suspense>
		</div>
	)
}
