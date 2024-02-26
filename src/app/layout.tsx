import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './ui/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Movies App',
	description: 'In this app you can find popular movies',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			{/* Asi hacemos que el body tenga un maximo de 12 columnas para mantener el diseño de tailwind */}
			<body className={`${inter.className} dflex flex-col min-h-screen mx-auto max-w-12xl`}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
