import type { UListAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./VerticalList.sass";

export default function VerticalList(props: DeepGuard<UListAttributes>) {
	return (
		<ul { ...props } class={ [ 'vertical_list', props.class ] }>
			{ props.children }
		</ul>
	)
}
