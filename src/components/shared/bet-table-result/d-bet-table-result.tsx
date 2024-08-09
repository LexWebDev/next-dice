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

	const getRowColor = (guess: string, result: number) => {
		const [condition, valueStr] = guess.split(' ')
		const value = parseInt(valueStr)

		if (
			(condition === 'Over' && result > value) ||
			(condition === 'Under' && result < value)
		) {
			return 'success.main'
		} else {
			return 'error.main'
		}
	}

	return (
		<TableContainer>
			<Table sx={{ width: 600 }} size='small' aria-label='table result'>
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
						<TableRow key={`${row.time}-${index}`}>
							<TableCell component='th' scope='row'>
								{row.time}
							</TableCell>
							<TableCell>{row.guess}</TableCell>
							<TableCell sx={{ color: getRowColor(row.guess, row.result) }}>
								{row.result}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
