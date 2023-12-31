import './globals.css'
import type { Metadata } from 'next'
import Footer from './section/footer'
import { inter } from './components/typography/fonts'
import Navbar from './section/navbar'
export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
	}: {
	children: React.ReactNode
	}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} flex bg-gray-50 flex-col relative justify-between items-stretch w-full min-h-screen`}>
				<Navbar/>
					<main className=' h-full relative'>
						{children}
					</main>
				<Footer/>
			</body>
		</html>
	)
}
