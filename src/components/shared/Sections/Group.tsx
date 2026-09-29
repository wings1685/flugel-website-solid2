import type { Directions, DivAttributes, Sizes } from "@/_global/types/components"
import type { DeepGuard } from "@/_global/types/types";
import "./Group.sass";

type Props = DivAttributes & {
	direction?: Directions;
	marginSize?: Extract<Sizes, 'small' | 'medium' | 'large' | 'none'>;
}

export default function Group(props: DeepGuard<Props>) {
	const direction = props.direction ?? 'center';
	const marginSize = props.marginSize ?? 'medium';

	return (
		<div { ...props } class={ [ `group direction_${direction} margin_size_${marginSize}`, props.class ] }>
			{ props.children }
		</div>
	)
}
