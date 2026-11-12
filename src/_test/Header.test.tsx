import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, waitFor } from "@solidjs/testing-library";
import { createRouter, memoryHistory } from "@solidjs/router";
import { Header } from "@/components/shared/Sections";
import type { Params, RouteSectionProps } from "@solidjs/router";

window.scrollTo = vi.fn();

describe('Header コンポーネントのナビゲーションテスト', () => {
	it('Typesリンクをクリックしたとき、正常にパスが切り替わり active クラスが付与されるか', async () => {
		// 1. テスト用の仮想ルーター（createMemoryHistory）の初期状態をセットアップ
		const history = memoryHistory('/');
		const Router = createRouter({
			history: history,
			routes: [{
				path: '/',
				component: (props: RouteSectionProps<unknown, Params>) => (
					<>
						<Header />
						{props.children}
					</>
				),
				children: [
					{ path: '/', component: () => <p>top</p> },
					{ path: '/types', component: () => <p>types</p> }
				]
			}],
		});
		const { getByRole } = render(() => <Router />);

		// 2. 最初は "Home" に active クラスがついていることを確認
		const homeLink = getByRole('link', { name: /Home/i });
		expect(homeLink.classList.contains('active')).toBe(true);

		// 3. "Types" のリンクを取得して、クリックイベントを発生させる
		const typesLink = getByRole('link', { name: /Types/i });
		fireEvent.click(typesLink);
		await waitFor(() => {
			// 4. 【検証】ルーターのパスが '/types/' に遷移したかを確認
			expect(history.get()).toBe('/types/');
		}, { timeout: 100 });

		// 5. 【検証】"Types" リンクに active クラスが付き、"Home" から外れたかを確認
		// ※Solidのリアクティビティによって、DOMが即座に更新されるかをテストします
		expect(typesLink.classList.contains('active')).toBe(true);
		expect(homeLink.classList.contains('active')).toBe(false);
	});
});
