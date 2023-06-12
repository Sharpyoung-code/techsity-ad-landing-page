import "../styles/globals.css";
import "../styles/nprogress.css";
import type { AppProps } from "next/app";
import "nprogress/nprogress.css";
import "animate.css/animate.min.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/layout";
import PreLoader from "../components/layout/PreLoader";

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
			{loading ? <PreLoader /> : <></>}
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
