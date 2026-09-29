import { createSignal } from "solid-js";

type Store = boolean;
const initialValue: Store = false;

export const _navOpened = {
	server: {
		navOpened: (): Store => initialValue,
		setNavOpened: (_: Store) => {},
	},
	client: () => {
		const [ navOpened, setNavOpened ] = createSignal<Store>(initialValue);

		return { navOpened, setNavOpened };
	},
};
