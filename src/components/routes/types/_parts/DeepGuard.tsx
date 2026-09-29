import { Box } from "@/components/shared/Sections";
import { Paragraph } from "@/components/shared/Typography";
import { Highlight } from "./";
import type { DeepGuard } from "@/_global/types/types";

type Props = {
	types: string;
	glass: string;
};

export default function DeepGuard(props: DeepGuard<Props>) {
	return (
		<Box>
			<Paragraph>再帰的に Readonly を付与する DeepGuard 型を、コンポーネントの props や読み込みの戻り値の際に使用しています。</Paragraph>
			<Highlight filename="types.ts" code={ props.types } />
			<Highlight filename="Glass.tsx" code={ props.glass } />
		</Box>
	)
}
