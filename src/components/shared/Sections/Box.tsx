import type { DivAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./Box.sass";

export default function Box(props: DeepGuard<DivAttributes>) {
	return (
		<div { ...props } class={ [ 'box', props.class ] }>
			{ props.children }
		</div>
	)
}
