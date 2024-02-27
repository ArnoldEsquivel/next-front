'use client'
import {
	Modal,
	Image,
	Button,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalContent,
	useDisclosure,
} from '@nextui-org/react'
import { Movie } from '../lib/definitions'
import ComingSoon from '../../../public/coming-soon.jpg'
import NextImage from 'next/image'
import Rating from './Rating'

export default function MovieModal({ movie }: { movie: Movie }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Button
				onPress={onOpen}
				className='w-full h-full p-3 flex flex-col gap-1 whitespace-normal'
				variant='light'
			>
				<p className='text-tiny text-white /80 font-bold text-xl line-clamp-1'>{movie.title}</p>
				<span className='text-tiny text-white /60'>
					Release on <b>{movie.release_date}</b>
				</span>
				<span className='text-tiny text-white overflow-hidden line-clamp-2'>{movie.overview}</span>
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur' size='3xl' hideCloseButton={true}>
				<ModalContent className='bg-zinc-900 overflow-hidden absolute self-center top-0 md:static'>
					{(onClose) => (
						<>
							<ModalHeader className='p-0 rounded-t-lg'>
								{movie.backdrop_path ? (
									<Image
										src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
										alt={movie.title}
										width={1080}
										height={720}
										isZoomed={false}
										className='rounded-t-lg'
									/>
								) : (
									<NextImage
										src={ComingSoon}
										alt='Coming Soon'
										width={1080}
										height={720}
										className='rounded-t-lg'
									/>
								)}
							</ModalHeader>
							<ModalBody>
								<div className='flex justify-between items-center'>
									<p className='text-tiny text-white /80 font-bold text-xl line-clamp-1'>
										{movie.title}
									</p>
									<Rating rating={movie.vote_average} />
								</div>
								<span className='text-tiny text-gray-500 /60'>
									Release on <b>{movie.release_date}</b>
								</span>
								<p className='text-tiny text-gray-300 /80 text-xs'>{movie.overview}</p>
							</ModalBody>
							<ModalFooter>
								<Button onPress={onClose} className='w-full' color='danger' variant='light'>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
