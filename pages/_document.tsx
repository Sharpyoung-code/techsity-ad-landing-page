import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head />
			<body style={{ width: "100vw", position: "absolute", overflowX: "hidden" }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
