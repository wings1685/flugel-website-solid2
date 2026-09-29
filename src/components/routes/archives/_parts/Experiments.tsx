import { For } from "solid-js";
import { experiments } from "../_models/usePage";
import { Glass, HorizontalList, VerticalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import "./Archives.sass";

export default function Experiments() {
	return (
		<Glass as="section">
			<PageTitle icon="folder">実験一覧</PageTitle>
			<VerticalList>
				<For each={ experiments } keyed={ false }>
					{experiment => (
						<li>
							<Paragraph class="archives_paragraph">{ experiment().description }</Paragraph>
							<HorizontalList class="monospace">
								<For each={ experiment().stacks }>
									{stack => (
										<li>{ stack }</li>
									)}
								</For>
							</HorizontalList>
						</li>
					)}
				</For>
			</VerticalList>
		</Glass>
	)
}
