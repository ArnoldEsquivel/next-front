import React from 'react'
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
	Button,
	User,
	Link,
} from '@nextui-org/react'
import { LinkedIn, WhatsApp } from './Icons'

export default function App() {
	return (
		<Dropdown
			backdrop='blur'
			radius='sm'
			classNames={{
				content: 'p-0 border-small border-divider bg-zinc-900',
			}}
		>
			<DropdownTrigger>
				<Button variant='flat' disableRipple color='primary'>
					Contact Me
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label='Custom item styles'
				disabledKeys={['profile']}
				className='p-3'
				itemClasses={{
					base: ['rounded-md', 'text-default-500', 'transition-opacity'],
				}}
				variant='flat'
			>
				<DropdownSection aria-label='Social Media'>
					<DropdownItem key='profile' className='h-14 gap-2 opacity-100'>
						<User
							name='Arnold Esquivel'
							description='Software Engineer'
							classNames={{
								name: 'text-white font-semibold',
								description: 'text-default-500',
							}}
							avatarProps={{
								size: 'md',
								src: 'https://media.licdn.com/dms/image/D5603AQF40bJpWbHY4A/profile-displayphoto-shrink_800_800/0/1684286984915?e=1714608000&v=beta&t=ipuIvBlWCs4HV4ZWI32O0sM19BWGt5N57hxOCVHWh7g',
							}}
						/>
					</DropdownItem>
					<DropdownItem
						href='https://www.linkedin.com/in/arnold-esquivel-41a5a9172'
						key='linkedin'
						target='_blank'
						startContent={<LinkedIn />}
					>
						Profile
					</DropdownItem>
					<DropdownItem
						key='certifications'
						href='https://www.linkedin.com/in/arnold-esquivel-41a5a9172/details/certifications/'
						target='_blank'
						startContent={<LinkedIn />}
					>
						Certifications
					</DropdownItem>
					<DropdownItem
						key='certifications'
						href='https://wa.me/525591610585'
						target='_blank'
						startContent={<WhatsApp />}
					>
						WhatsApp
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	)
}
