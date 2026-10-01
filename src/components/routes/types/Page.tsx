import { createMemo } from "solid-js";
import { query } from "@solidjs/router";
import { getHighlightedCode } from "./_models/usePage";
import { codes as codesDeepGuard } from "./_models/codeDeepGuard";
import { codes as codesProps } from "./_models/codeProps";
import { codes as codesExclude } from "./_models/codeExclude";
import { unescapeTag } from "@/_global/lib/utils";
import { DeepGuard, Exclude, Props } from "./_parts";
import { Box, Glass } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import SiteMeta from "../SiteMeta";
import type { RouteDefinition } from "@solidjs/router";

const getShiki = query(async () => {
	"use server";

	const typesDeepGuard = await getHighlightedCode(codesDeepGuard.types);
	const glassDeepGuard = await getHighlightedCode(codesDeepGuard.glass);

	const iconProps = await getHighlightedCode(unescapeTag(codesProps.icon));
	const pageTitleProps = await getHighlightedCode(unescapeTag(codesProps.pageTitle));
	const typesProps = await getHighlightedCode(codesProps.types);
	const groupProps = await getHighlightedCode(codesProps.group);

	const glassExclude = await getHighlightedCode(unescapeTag(codesExclude.glass));

	return {
		deepGuard: { types: typesDeepGuard, glass: glassDeepGuard },
		props: { icon: iconProps, pageTitle: pageTitleProps, types: typesProps, group: groupProps },
		exclude: { glass: glassExclude },
	};
}, 'get-shiki');

export const route = {
	preload: () => void getShiki(),
} satisfies RouteDefinition;

export default function Page() {
	const data = createMemo(() => getShiki());

	return (
		<main>
			<SiteMeta dir="/types" />
			<Glass as="section">
				<Box>
					<PageTitle icon="code">型の制御例</PageTitle>
					<Paragraph>
						フロントエンドのフレームワークを使用した型の制御においては、以下のような方法を採用しています。<br />
						以下は、本サイト内でのソースの一例をご案内します。
					</Paragraph>
				</Box>
				<DeepGuard types={ data().deepGuard.types } glass={ data().deepGuard.glass } />
				<Props icon={ data().props.icon } pageTitle={ data().props.pageTitle } types={ data().props.types } group={ data().props.group } />
				<Exclude glass={ data().exclude.glass } />
			</Glass>
		</main>
	);
}
