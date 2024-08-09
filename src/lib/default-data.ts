import {
	BetSelectorTypes,
	BetSelectorValueEnum
} from '@/types/bet-selector.types'
import { BetSliderTypes } from '@/types/bet-slider.types'

export const BET_COUNT_DATA: number = 100
export const MAX_RESULT_DATA: number = 10

export const BET_SELECTOR_DATA: BetSelectorTypes[] = [
	{
		value: BetSelectorValueEnum.UNDER,
		label: 'Under'
	},
	{
		value: BetSelectorValueEnum.OVER,
		label: 'Over'
	}
]

export const BET_SLIDER_MARKS_DATA: BetSliderTypes[] = [
	{
		value: 0,
		label: '0'
	},
	{
		value: 20
	},
	{
		value: 40
	},
	{
		value: 60
	},
	{
		value: 80
	},
	{
		value: 100,
		label: '100'
	}
]

export const BET_TABLE_TITLES_DATA: string[] = ['Time', 'Guess', 'Result']
