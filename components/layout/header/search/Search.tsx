'use client'
import { FC } from 'react'
import styles from './Search.module.scss'
import { BiSearch } from 'react-icons/bi'
import { useSearch } from './useSearch'
import VideoItem from '../../../ui/video-item/VideoItem'

const Search: FC = () => {
	const { handleSearch, searchTerm, data, isSuccess } = useSearch()

	return (
		<div className={styles.search}>
			<label>
				<input
					type='text'
					placeholder='Найти видео...'
					value={searchTerm}
					onChange={handleSearch}
				/>
				<BiSearch size={20} />

				{isSuccess && (
					<div className={styles.result}>
						{data?.length ? (
							data.map(item => <VideoItem item={item} isSmall />)
						) : (
							//data.map(item => <div className='text-white'>{item.name}</div>)
							<div className='text-white'>Видео не найдены!</div>
						)}
					</div>
				)}
			</label>
		</div>
	)
}

export default Search
