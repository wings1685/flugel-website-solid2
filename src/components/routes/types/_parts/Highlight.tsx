import { Show } from "solid-js";
import type { DeepGuard } from "@/_global/types/types";
import "./Highlight.sass";

type Props = {
	code: string;
	filename?: string;
};

export default function Highlight(props: DeepGuard<Props>) {
	return (
		<div class="code_highlight">
			<Show when={ props.filename }>
				<p class="filename monospace">{ props.filename }</p>
			</Show>
			<div class="shiki_wrapper" innerHTML={ props.code } />
		</div>
	)
}
