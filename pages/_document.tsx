import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<title>Techsity | Where Learning Meets Opportunity</title>
				<meta
					name="description"
					content="Techsity is a technology-focused education and training institution that provides skills development programs for individuals who want to start or advance their tech careers. Our mission is to bridge the skills gap in the tech industry by providing high-quality education and practical experience to our students."
				/>
				<meta name="author" content="Techsity" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
				<meta
					name="keywords"
					content="Techsity, Software engineering, web development, software development, Technology, Data, Data science, product management, product design, cloud computing programming, cyber security, Artificial Intelligence, Technology skills, tech training"
				/>
			</Head>
			<body style={{ width: "100vw", position: "absolute", overflowX: "hidden" }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
