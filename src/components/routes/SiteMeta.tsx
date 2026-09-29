import { buildMeta } from "@/_global/lib/meta";
import { MetaTags } from "../shared/Utils";
import type { DeepGuard } from "@/_global/types/types";
import type { YamlFiles, MetaProps } from "@/_global/lib/meta";

const globData = import.meta.glob('./**/_data/meta.yaml', { eager: true }) as YamlFiles;
const pageData = import.meta.glob('./**/Page.tsx');

export default function SiteMeta(props: DeepGuard<MetaProps>) {
	const meta = buildMeta({ ...props, globData, pageData });

	return (
		<MetaTags { ...meta } />
	)
}
