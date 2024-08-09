import styles from './page.module.css'
import {
	DBetPlay,
	DBetSelector,
	DBetSlider,
	DBetTableResult,
	DCountBox
} from '@/components'
import React from 'react'
import { Box, Container } from '@mui/material'

export default function Home() {
	return (
		<Container maxWidth={'sm'}>
			<Box className={styles.main}>
				<Box className={styles.wrapper__content}>
					<DCountBox />
					<DBetSelector />
					<DBetSlider />
					<DBetPlay />
				</Box>
				<Box className={styles.wrapper__table}>
					<DBetTableResult />
				</Box>
			</Box>
		</Container>
	)
}
