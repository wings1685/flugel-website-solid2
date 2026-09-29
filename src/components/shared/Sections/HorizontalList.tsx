import type { UListAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./HorizontalList.sass";

export default function HorizontalList(props: DeepGuard<UListAttributes>) {
	return (
		<ul { ...props } class={ [ 'horizontal_list', props.class ] }>
			{ props.children }
		</ul>
	)
}
