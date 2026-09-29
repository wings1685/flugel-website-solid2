import { createSignal } from "solid-js";

import type { Months } from "@/_global/lib/shared";

type Store = Months | '';
const initialValue: Store = '';

export const _selectedMonth = {
	server: {
		selectedMonth: (): Months => initialValue,
		setSelectedMonth: (_: Months = '') => {},
	},
	client: () => {
		const [ selectedMonth, setSelectedMonth ] = createSignal<Months>();

		return { selectedMonth, setSelectedMonth };
	},
};
