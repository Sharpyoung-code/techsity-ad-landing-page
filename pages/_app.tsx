import "../public/styles/globals.css";
import "../public/styles/nprogress.css";
import type { AppProps } from "next/app";
import "nprogress/nprogress.css";
import "animate.css/animate.min.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/layout";
import PreLoader from "../components/layout/PreLoader";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	useEffect(() => {
		const handleStart = (url: string) => {
			setLoading(true);
			NProgress.start();
		};
		const handleStop = () => {
			setLoading(false);
			NProgress.done();
		};
		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);
	return (
		<Layout>
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
			{loading ? <PreLoader /> : <></>}
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
