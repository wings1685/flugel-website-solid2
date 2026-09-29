import * as v from "valibot";
import type { DeepGuard } from "../types/types";

const MetaSchema = v.object({
	title: v.string(),
	description: v.optional(v.string()),
	ogImage: v.optional(v.string()),
});
type SiteMeta = v.InferOutput<typeof MetaSchema>;
type PageMeta = Partial<SiteMeta>;
export type MetaData = SiteMeta & {
	siteTitle: string,
};

export type YamlFiles = Record<string, {
	default: SiteMeta;
}>;
type MetaInfo = Omit<MetaData, 'title'> & {
	titles: string[];
};

export type MetaProps = {
	dir?: string;
	meta?: PageMeta;
};
type Props = MetaProps & {
	globData: YamlFiles;
	pageData: Record<string, unknown>;
};

const separator = ' | ';
const convertDirectoryArray = (dir: string) => {
	const dirs = dir.split('/');

	return dirs.filter((path, index) => path || index === 0).map(path => path ? `${path}/` : path);
};
const getPaths = (pageData: Props['pageData']) => Object.keys(pageData).map(path => `/${path.split('/').slice(1, -1).join('/')}`);
const getParentDir = (dir: string) => dir.split('/').filter((d, i) => d || i === 0).slice(0, -1).join('/') || '/';
const getAvailableDirs = (paths: string[], dir: string) => {
	const parentDir = getParentDir(dir);

	return paths.filter(path => getParentDir(path) === parentDir);
};

export const buildMeta = (props: DeepGuard<Props>): MetaData => {
	const { dir = '/', meta, globData, pageData } = props;

	const paths = getPaths(pageData);
	if (dir && !paths.includes(dir)) {
		const availableDirs = getAvailableDirs(paths, dir);
		console.error('Available directories: ', availableDirs);
		throw new Error('Undefined directory');
	}
	const metaData: MetaInfo = { titles: [], description: '', ogImage: '', siteTitle: '' };

	const pagePaths = convertDirectoryArray(dir);
	const pagePath = pagePaths.slice(-1)[0];
	const globPaths = Object.keys(globData);

	const setMeta = (data?: PageMeta, canOverrideTitle: boolean = true) => {
		if (!data) return;

		if (data.title && canOverrideTitle) metaData.titles = [ data.title, ...metaData.titles];
		if (data.title && !metaData.siteTitle) metaData.siteTitle = data.title;
		if (data.description !== undefined) metaData.description = data.description;
		if (data.ogImage !== undefined) metaData.ogImage = data.ogImage;
	};

	let builtPath = '';
	Object.values(pagePaths).forEach(path => {
		builtPath += path;
		const yamlPath = `./${builtPath}_data/meta.yaml`;
		if (!globPaths.includes(yamlPath)) return;

		const data = globData[yamlPath].default;
		v.parse(MetaSchema, data);

		const canOverrideTitle = !meta?.title || path !== pagePath;
		setMeta(data, canOverrideTitle);
	});
	setMeta(meta);

	const data: MetaData = {
		title: metaData.titles.join(separator),
		description: metaData.description,
		ogImage: metaData.ogImage,
		siteTitle: metaData.siteTitle,
	};

	return data;
};
