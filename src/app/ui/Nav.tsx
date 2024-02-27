'use client'
import { useState } from 'react'
import {
	Button,
	Navbar,
	NavbarMenu,
	NavbarItem,
	NavbarBrand,
	NavbarContent,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import CinemaImg from '../../../public/cinema.png'
import Image from 'next/image'
import ContactMe from './ContactMe'

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activePage, setActivePage] = useState('/')
	const pathname = usePathname()

	const menuItems = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Search',
			href: '/all',
		},
	]

	const handlePageChange = (page: string) => {
		setActivePage(page)
	}

	return (
		<Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className='bg-coolGray'>
			<NavbarContent>
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
				<NavbarBrand>
					<Image src={CinemaImg} alt='ACME' width={90} height={90} />
					<p className='font-bold text-inherit hidden sm:block'>POPCORNER</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				{menuItems.map((item, index) => (
					<NavbarItem
						key={index}
						isActive={item.href === activePage}
						onClick={() => handlePageChange(item.name)}
						className={pathname === item.href ? 'text-primary font-bold' : 'text-gray-600'}
					>
						<Link href={item.href}>{item.name}</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem>
					<ContactMe />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem
						key={index}
						isActive={item.href === activePage}
						onClick={() => handlePageChange(item.href)}
						className={pathname === item.href ? 'text-primary' : ''}
					>
						<Link href={item.href}>{item.name}</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}

export default Nav
