'use client'
import Next13ProgressBar from 'next13-progressbar'
import NextProgressBar from 'nextjs-progressbar'

const NextProgressClient = () => {
	return (
		<>
			<NextProgressBar height={4} color={'#FF7652'} showOnShallow />
			<Next13ProgressBar
				height={4}
				color={'#FF7652'}
				options={{ showSpinner: false }}
				showOnShallow
			/>
		</>
	)
}

export default NextProgressClient
