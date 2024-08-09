'use client'

import { Box, Typography } from '@mui/material'
import { BET_COUNT_DATA } from '@/lib/default-data'
import { useGameStore } from '@/store'

export const DCountBox = () => {
	const betHistory = useGameStore(state => state.betHistory)
	const lastResult =
		betHistory?.length > 0 ? betHistory[0].result : BET_COUNT_DATA

	return (
		<Box
			width={320}
			height={200}
			borderRadius={1}
			display={'flex'}
			alignItems='center'
			flexDirection={'column'}
			justifyContent={'center'}
			sx={{
				backgroundColor: 'action.hover'
			}}
		>
			<Typography variant={'h1'}>{lastResult}</Typography>
		</Box>
	)
}
