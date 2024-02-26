'use client'
import MovieCard from './MovieCard'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Input } from '@nextui-org/react'
import { SearchIcon } from './SearchIcon'
import { Suspense } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import CardSkeleton from './CardSkeleton'

export default function Search() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams)
		if (value) {
			params.set('title', value)
		} else {
			params.delete('title')
		}

		replace(`${pathname}?${params.toString()}`)
	}, 300)

	return (
		<>
			<div className='w-full flex justify-center gap-6 max-w-3xl pb-6'>
				<Input
					label='Search'
					radius='lg'
					variant='bordered'
					color='primary'
					placeholder='Type to search...'
					startContent={
						<SearchIcon className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
					}
					onChange={(e) => handleSearch(e.target.value)}
					defaultValue={searchParams.get('title') || ''}
				/>
			</div>
			<Suspense fallback={<CardSkeleton />}>
				<MovieCard title={searchParams.get('title') || ''} fetchType='title' />
			</Suspense>
		</>
	)
}
