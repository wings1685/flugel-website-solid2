import { codeToHtml } from "shiki";

export const getHighlightedCode = async (code: string, lang: string = 'typescript') => {
	return await codeToHtml(code, {
		lang,
		theme: 'dark-plus'
	});
};
