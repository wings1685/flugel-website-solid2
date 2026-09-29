import { About, Blog, Terms } from "./_parts";
import SiteMeta from "./SiteMeta";

export default function Page() {
	return (
		<main>
			<SiteMeta />
			<About />
			<Blog />
			<Terms />
		</main>
	);
}
