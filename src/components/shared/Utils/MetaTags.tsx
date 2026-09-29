import { Show } from "solid-js";
import { Meta, Title } from "@solidjs/meta";
import type { MetaData } from "@/_global/lib/meta";
import type { DeepGuard } from "@/_global/types/types";

export default function MetaTags(props: DeepGuard<MetaData>) {
	return (
		<>
			<Title>{ props.title }</Title>
			<Meta name="description" content={ props.description } />
			<Meta property="og:type" content="website" />
			<Meta property="og:title" content={ props.title } />
			<Meta property="og:description" content={ props.description } />
			<Meta property="og:site_name" content={ props.siteTitle } />
			<Show when={ props.ogImage }>
				<Meta property="og:image" content={ props.ogImage } />
			</Show>
			<Meta name="twitter:card" content="summary_large_image" />
		</>
	)
}
