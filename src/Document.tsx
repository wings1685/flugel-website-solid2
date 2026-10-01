import { HydrationScript } from "@solidjs/web";
import type { ParentProps } from "solid-js";

export default function Document(props: ParentProps) {
	return (
		<html lang="ja">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
				<link rel="apple-touch-icon" href="/favicon.png" />
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400&display=swap" />
				<HydrationScript />
			</head>
			<body>{ props.children }</body>
		</html>
	);
}
