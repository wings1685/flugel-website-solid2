import { createEffect, createSignal, onSettled, Show } from "solid-js";
import { months } from "@/_global/lib/shared";
import { sleep } from "@/_global/lib/utils";
import { useStore } from "@/_global/piquo";
import type { Months } from "@/_global/lib/shared";
import "./Bg.sass";

export default function Bg() {
	const [ currentMonth, setCurrentMonth ] = createSignal<Months>();
	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	let elBg: HTMLImageElement;
	const imagePath = '/images/bg/';
	const getImagePc = (month?: Months) => month ? `${imagePath}${ month }.webp` : '';
	const getImageSp = (month?: Months) => month ? `${imagePath}${ month }_sp.webp` : '';
	const getSrcset = (month?: Months) => {
		if (import.meta.env.SSR || !month) return '';

		return window.innerWidth <= 750 ? getImageSp(month) : getImagePc(month);
	};

	onSettled(() => {
		const month = months[(new Date()).getMonth()];
		setCurrentMonth(month);
	});

	createEffect(
		() => selectedMonth(),
		next => {
			if (!elBg || !next) return;

			if (!('computedStyleMap' in elBg)) {
				setCurrentMonth(next);
				return;
			}

			const style = elBg.computedStyleMap();
			const duration = style.get('animation-duration') as CSSUnitValue;
			const delay = duration.value * 1000;

			const animated = async () => {
				await sleep(delay);

				setCurrentMonth(next);
				setSelectedMonth();
			};
			animated();
		}
	);

	return (
		<div id="bg">
			<picture>
				<source media="(max-width: 750px)" srcset={ getImageSp(currentMonth()) } />
				<img ref={ (el) => elBg = el } src={ getImagePc(currentMonth()) } alt="" data-testid="bg" />
			</picture>
			<Show when={ selectedMonth() }>
				{next => (
					<img id="selected_bg" src={ getSrcset(next()) } alt="" />
				)}
			</Show>
		</div>
	)
}
