import { For } from "solid-js";
import { sites } from "../_models/usePage";
import { Glass, HorizontalList, VerticalList } from "@/components/shared/Sections";
import { PageTitle, Paragraph } from "@/components/shared/Typography";
import "./Archives.sass";

export default function Archives() {
	return (
		<Glass as="section">
			<PageTitle icon="folder">構築一覧</PageTitle>
			<VerticalList>
				<For each={sites} keyed={ false }>
					{site => (
						<li>
							<Paragraph class="archives_paragraph">{ site().description }</Paragraph>
							<HorizontalList class="monospace">
								<For each={ site().stacks }>
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
