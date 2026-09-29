import type { DeepGuard } from "@/_global/types/types";

const icons = {
	home: 'house',
	rss: 'square-rss',
	lock: 'lock',
	desktop: 'desktop',
	folder: 'folder-open',
	tab: 'up-right-from-square',
	arrow: 'circle-right',
	code: 'code',
} as const;
export type Icons = keyof typeof icons;

export type Props = {
	type: Icons;
}

export default function Icon(props: DeepGuard<Props>) {
	return (
		<i class={ `icon fa-solid fa-${icons[props.type]}` }></i>
	)
}
