import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import Layout from '../components/layout/Layout'
import Providers from '../providers/providers'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'YouTube',
	description: 'Russian version of YouTube',
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<html lang='en'>
				<body className={inter.className}>
					<Providers>
						<Layout title={'YouTube v2.0'}>{children}</Layout>
					</Providers>
				</body>
			</html>
		</>
	)
}
