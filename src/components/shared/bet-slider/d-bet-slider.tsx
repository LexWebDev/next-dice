'use client'
import React from 'react'
import { Box, Slider } from '@mui/material'
import { BET_SLIDER_MARKS_DATA } from '@/lib/default-data'
import { useGameStore } from '@/store'

export const DBetSlider = () => {
	const sliderValue = useGameStore(state => state.sliderValue)
	const setSliderValue = useGameStore(state => state.setSliderValue)

	const handleChange = (event: Event, newValue: number | number[]) => {
		setSliderValue(newValue as number)
	}

	return (
		<Box width={320}>
			<Slider
				aria-label='Bet Slider'
				color={'secondary'}
				defaultValue={20}
				getAriaValueText={(value: number) => `${value}`}
				step={20}
				value={sliderValue}
				onChange={handleChange}
				valueLabelDisplay='auto'
				marks={BET_SLIDER_MARKS_DATA}
			/>
		</Box>
	)
}
