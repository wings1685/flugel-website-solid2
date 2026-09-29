import { Title } from "@solidjs/meta";
import { Loading } from "solid-js";
import { Router } from "@/router";
import { Footer, Header, Nav } from "@/components/shared/Sections";
import { Bg } from "@/components/shared/Utils";
import "@/_global/styles/global.sass";

export default function App() {
	return (
		<Router>
			{(props) => (
				<>
					<Title>Solid App</Title>
					<Header />
					<Loading>{ props.children }</Loading>
					<Nav />
					<Footer />
					<Bg />
				</>
			)}
		</Router>
	);
}
