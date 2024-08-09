'use client'

import React from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material'
import { BET_TABLE_TITLES_DATA } from '@/lib/default-data'
import { useGameStore } from '@/store'

export const DBetTableResult = () => {
	const betHistory = useGameStore(state => state.betHistory)

	if (!betHistory?.length) {
		return <Typography variant={'body2'}>No results yet</Typography>
	}

	return (
		<TableContainer>
			<Table sx={{ minWidth: 600 }} size='small' aria-label='a dense table'>
				<TableHead
					sx={{
						height: 56
					}}
				>
					<TableRow>
						{BET_TABLE_TITLES_DATA.map((title, index) => (
							<TableCell key={index}>{title}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{betHistory.map((row, index) => (
						<TableRow key={index}>
							<TableCell component='th' scope='row'>
								{row.time}
							</TableCell>
							<TableCell>{row.guess}</TableCell>
							<TableCell>{row.result}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
