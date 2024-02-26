import { Card, Skeleton } from '@nextui-org/react'

export default function CardSkeleton() {
	return (
		<div className='w-full flex flex-wrap justify-center gap-6 max-w-7xl pb-6'>
			{Array.from({ length: 9 }).map((_, index) => (
				<Card className='w-[270px] h-[390px] space-y-5 p-4 bg-zinc-900' radius='lg' key={index}>
					<Skeleton className='rounded-lg'>
						<div className='h-24 rounded-lg bg-zinc-600'></div>
					</Skeleton>
					<div className='space-y-3'>
						<Skeleton className='w-3/5 rounded-lg'>
							<div className='h-3 w-3/5 rounded-lg bg-zinc-600'></div>
						</Skeleton>
						<Skeleton className='w-4/5 rounded-lg'>
							<div className='h-3 w-4/5 rounded-lg bg-zinc-600'></div>
						</Skeleton>
						<Skeleton className='w-2/5 rounded-lg'>
							<div className='h-3 w-2/5 rounded-lg bg-zinc-600'></div>
						</Skeleton>
					</div>
				</Card>
			))}
		</div>
	)
}
