import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, waitFor } from "@solidjs/testing-library";
import { Blog } from "@/components/routes/_parts";

describe('Blog コンポーネントのリアルデータ取得テスト', () => {
	afterEach(() => {
		cleanup();
	});

	it('実際にAPIやネットワークからデータを取得し、画面に記事がレンダリングされるか', async () => {
		const { queryAllByRole } = render(() => <Blog />);
		await waitFor(() => {
			const articles = queryAllByRole('article');
			expect(articles.length).toBeGreaterThan(0);
		}, { timeout: 1000 });
	});
});
