'use client'

import React from 'react'
import { Alert, AlertTitle, Button, Snackbar } from '@mui/material'
import { useGameStore } from '@/store'
import { generateRandomValue, getCurrentTime } from '@/lib/utils'
import { BetTableResultTypes } from '@/types/bet-table-result.types'
import { BetSelectorValueEnum } from '@/types/bet-selector.types'

export const DBetPlay = () => {
	const addBetResult = useGameStore(state => state.addBetResult)
	const createGuess = useGameStore(state => state.createGuess)
	const selectedBet = useGameStore(state => state.selectedBet)
	const sliderValue = useGameStore(state => state.sliderValue)

	const [alertOpen, setAlertOpen] = React.useState(false)
	const [alertMessage, setAlertMessage] = React.useState('')
	const [alertTitle, setAlertTitle] = React.useState('')
	const [alertSeverity, setAlertSeverity] = React.useState<'success' | 'error'>(
		'success'
	)

	const determineWin = (randomValue: number) => {
		if (selectedBet === BetSelectorValueEnum.OVER) {
			return randomValue > sliderValue
		}
		return randomValue < sliderValue
	}

	const showAlert = (isWin: boolean) => {
		if (isWin) {
			setAlertTitle('')
			setAlertMessage('You won!')
			setAlertSeverity('success')
		} else {
			const conditionText =
				selectedBet === BetSelectorValueEnum.OVER ? 'lower' : 'higher'

			setAlertTitle('You lost')
			setAlertMessage(`Number was ${conditionText}`)
			setAlertSeverity('error')
		}
		setAlertOpen(false)
		setTimeout(() => setAlertOpen(true), 150)
	}

	const handleCloseAlert = () => {
		setAlertOpen(false)
	}

	const handlePlayGame = () => {
		const randomValue = generateRandomValue()
		const currentTime = getCurrentTime()
		const guess = createGuess()
		const isWin = determineWin(randomValue)

		showAlert(isWin)

		const newResult: BetTableResultTypes = {
			time: currentTime,
			guess: guess,
			result: randomValue
		}

		addBetResult(newResult)
	}
	return (
		<>
			<Button
				variant={'contained'}
				color={'secondary'}
				size={'large'}
				fullWidth
				onClick={handlePlayGame}
			>
				Play
			</Button>

			<Snackbar
				open={alertOpen}
				onClose={handleCloseAlert}
				autoHideDuration={4000}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					severity={alertSeverity}
					onClose={handleCloseAlert}
					variant='filled'
					sx={{ width: '600px' }}
				>
					{alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
					{alertMessage}
				</Alert>
			</Snackbar>
		</>
	)
}
