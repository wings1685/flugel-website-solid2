import { createStore, For, onSettled, reconcile } from "solid-js";
import { fetchEntries } from "../_models/usePage";
import { Glass, VerticalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import type { BlogEntries } from "../_models/schema";
import "./Blog.sass";

export default function Blog() {
	const formatDate = (published: BlogEntries[number]['published']) => (new Date(published)).toLocaleDateString('ja-JP', {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
	const [ entries, setEntries ] = createStore([...Array(5)].map((_, i) => ({
		title: '**********',
		link: '',
		published: '2026-01-01 00:00:00',
		summary: "********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********",
	})));

	onSettled(() => {
		const getEntries = async () => {
			const data = await fetchEntries();

			setEntries(reconcile(data));
		};
		getEntries();
	});

	return (
		<Glass as="section">
			<PageTitle icon="rss">記事</PageTitle>
			<VerticalList id="blog_entries">
				<For each={ entries } keyed={ false }>
					{entry => (
						<li>
							<article>
								<Glass as="a" href={ entry().link } icon="tab" isDark target="_blank" rel="noopener noreferrer">
									<p>{ entry().title }</p>
								</Glass>
								<span class="published">{ formatDate(entry().published )}</span>
								<Paragraph class="summary">{ entry().summary }</Paragraph>
							</article>
						</li>
					)}
				</For>
			</VerticalList>
		</Glass>
	)
}
