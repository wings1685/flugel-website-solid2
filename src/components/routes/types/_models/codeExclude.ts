export const codes = {
	glass: `type IconProps = Pick&lt;ComponentProps&lt;typeof Icon&gt;, 'type'&gt;;
type Props = {
  mini?: boolean;
  isDark?: boolean;
} & ( | AsDiv | AsSection | ( AsLink & {
  href: string;
  icon?: IconProps['type'];
}) );`
} as const;
