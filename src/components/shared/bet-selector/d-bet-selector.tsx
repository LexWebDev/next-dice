'use client'

import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { BET_SELECTOR_DATA } from '@/lib/default-data'
import { useGameStore } from '@/store'

export const DBetSelector = () => {
	const selectedBet = useGameStore(state => state.selectedBet)
	const setSelectedBet = useGameStore(state => state.setSelectedBet)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedBet((event.target as HTMLInputElement).value)
	}

	return (
		<FormControl>
			<RadioGroup
				row
				aria-labelledby='bet-selecter'
				name='bet-selecter'
				value={selectedBet}
				onChange={handleChange}
			>
				{BET_SELECTOR_DATA.map((item, index) => (
					<FormControlLabel
						key={index}
						value={item.value}
						control={<Radio color={'secondary'} />}
						labelPlacement={'start'}
						label={item.label}
					/>
				))}
			</RadioGroup>
		</FormControl>
	)
}
