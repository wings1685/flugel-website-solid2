import { dynamic } from "@solidjs/web";
import type { ParagraphAttributes, DivAttributes } from "@/_global/types/components";
import type { DeepGuard } from "@/_global/types/types";
import "./Paragraph.sass";

type Props = (ParagraphAttributes & {
	as?: 'p';
}) | (DivAttributes & {
	as: 'div';
});

export default function Paragraph(props: DeepGuard<Props>) {
	const Component = dynamic(() => props.as ?? 'p');

	return (
		<Component { ...props } class={ [ 'paragraph', props.class ] }>{ props.children }</Component>
	)
}
