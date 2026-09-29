import { Box } from "@/components/shared/Sections";
import { Paragraph } from "@/components/shared/Typography";
import { Highlight } from "./";
import type { DeepGuard } from "@/_global/types/types";

type Props = {
	glass: string;
};

export default function Extract(props: DeepGuard<Props>) {
	return (
		<Box>
			<Paragraph>コンポーネントが div や a など複数の要素で展開する際は、div を指定する場合は href を渡さないよう、逆に a を指定する場合は href が必須であるような、排他的型制御を行っています。</Paragraph>
			<Highlight filename="Glass.tsx" code={ props.glass } />
		</Box>
	)
}
