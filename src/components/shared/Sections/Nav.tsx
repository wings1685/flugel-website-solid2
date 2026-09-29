import { monthData } from "@/_global/lib/shared";
import { useStore } from "@/_global/piquo";
import { For } from "solid-js";
import { Glass } from "./";
import type { Months } from "@/_global/lib/shared";
import "./Nav.sass";

export default function Nav() {
	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	const handleClick = (e: Event, key: Months) => {
		e.preventDefault();

		if (selectedMonth()) return;

		setSelectedMonth(key);
	};

	return (
		<nav class="wrapper">
			<For each={ Object.entries(monthData) }>
				{([key, name]) => (
					<Glass as="div" mini isDark class="btn_glass" onClick={ (e: Event) => handleClick(e, key) }>{ name }</Glass>
				)}
			</For>
		</nav>
	)
}
