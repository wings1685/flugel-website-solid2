import type { JSX } from "@solidjs/web";

export type DivAttributes = JSX.IntrinsicElements['div'];
export type AsDiv = DivAttributes & {
	as?: 'div';
};
export type SectionAttributes = JSX.IntrinsicElements['section'];
export type AsSection = SectionAttributes & {
	as: 'section';
};

export type LinkAttributes = JSX.IntrinsicElements['a'];
export type AsLink = LinkAttributes & {
	as: 'a';
};

export type HAttributes = JSX.IntrinsicElements['h1'] &
							JSX.IntrinsicElements['h2'] &
							JSX.IntrinsicElements['h3'] &
							JSX.IntrinsicElements['h4'] &
							JSX.IntrinsicElements['h5'] &
							JSX.IntrinsicElements['h6'];

export type ParagraphAttributes = JSX.IntrinsicElements['p'];

export type UListAttributes = JSX.IntrinsicElements['ul'];

export type Sizes = 'small' | 'medium' | 'large' | 'extrasmall' | 'extralarge' | 'none';
export type Directions = 'left' | 'center' | 'right' | 'justify';
