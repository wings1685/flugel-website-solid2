import { dynamic } from "@solidjs/web";
import { Section } from "./";
import { Icon } from "../Utils";
import type { DeepGuard } from "@/_global/types/types";
import type { AsDiv, AsSection, AsLink } from "@/_global/types/components";
import type { ComponentProps } from "solid-js";
import "./Glass.sass";

type IconProps = Pick<ComponentProps<typeof Icon>, 'type'>;
type Props = {
	mini?: boolean;
	isDark?: boolean;
} & ( | AsDiv | AsSection | ( AsLink & {
	href: string;
	icon?: IconProps['type'];
}) );

export default function Glass(props: DeepGuard<Props>) {
	if (props.as === 'a') {
		return (
			<a { ...props } class={ [ 'glass mini is_dark', props.class ] }>
				{ props.children }
				{props.as === 'a' && props.icon && (
					<Icon type={ props.icon } />
				)}
			</a>
		)
	}
	const Component = dynamic(() => props.as === 'section' ? Section : 'div');
	const classList = [ 'glass', { mini: props.mini, is_dark: props.isDark }, props.class ] as ComponentProps<typeof Component>['class'];

	return (
		<Component { ...props } class={ classList }>
			{ props.children }
		</Component>
	)
}
