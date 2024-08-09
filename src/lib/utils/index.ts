import { BetTableResultTypes } from '@/types/bet-table-result.types'
import { BET_COUNT_DATA } from '@/lib/default-data'

export const createTableData = (data: BetTableResultTypes) => {
	return {
		...data
	}
}

export const generateRandomValue = (max = BET_COUNT_DATA) => {
	return Math.floor(Math.random() * max) + 1
}

export const getCurrentTime = () => {
	return new Date().toLocaleTimeString('en-GB', {
		hour12: false
	})
}
