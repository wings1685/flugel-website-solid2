import { Archives, Experiments, Environment } from "./_parts";
import SiteMeta from "../SiteMeta";

export default function Page() {
	return (
		<main>
			<SiteMeta dir="/archives" />
			<Environment />
			<Experiments />
			<Archives />
		</main>
	);
}
