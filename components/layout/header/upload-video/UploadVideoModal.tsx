import React, { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IUploadModal } from './upload-video.inteface'
import UploadVideoForm from './upload-video-form/UploadVideoForm'
import styles from './UploadVideo.module.scss'

const UploadVideoModal: FC<IUploadModal> = ({ isOpen, setIsOpen, videoId }) => {
	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' onClose={closeModal} className={styles.modal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className={styles.overlay} aria-hidden='true' />
					</Transition.Child>

					<div className={styles.wrapper}>
						<div>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className={styles.window}>
									{videoId && (
										<UploadVideoForm
											videoId={videoId}
											handleCloseModal={closeModal}
										/>
									)}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default UploadVideoModal
