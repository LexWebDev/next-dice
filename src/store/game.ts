import { create } from 'zustand'
import { produce } from 'immer'
import { BetTableResultTypes } from '@/types/bet-table-result.types'
import {
	BET_SELECTOR_DATA,
	BET_SLIDER_MARKS_DATA,
	MAX_RESULT_DATA
} from '@/lib/default-data'
import { BetSelectorValueEnum } from '@/types/bet-selector.types'

type GameStoreState = {
	betHistory: BetTableResultTypes[]
	selectedBet: BetSelectorValueEnum
	sliderValue: number

	addBetResult: (newResult: BetTableResultTypes) => void
	setSelectedBet: (value: string) => void
	setSliderValue: (value: number) => void
	createGuess: () => string
}

export const useGameStore = create<GameStoreState>((set, get) => ({
	betHistory: [],
	selectedBet: BET_SELECTOR_DATA[0].value,
	sliderValue: BET_SLIDER_MARKS_DATA[1].value,

	addBetResult: newResult =>
		set(
			produce(state => {
				state.betHistory.unshift(newResult)
				if (state.betHistory.length > MAX_RESULT_DATA) {
					state.betHistory.pop()
				}
			})
		),

	setSelectedBet: value =>
		set(
			produce(state => {
				state.selectedBet = value
			})
		),

	setSliderValue: value =>
		set(
			produce(state => {
				state.sliderValue = value
			})
		),

	createGuess: () => {
		const { selectedBet, sliderValue } = get()
		return selectedBet === BetSelectorValueEnum.OVER
			? `Over ${sliderValue}`
			: `Under ${sliderValue}`
	}
}))
