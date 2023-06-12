import { useEffect, useState } from "react";
import { useHeaderNotification } from "../../../hooks/api";
import { NotificationType } from "../../../interfaces/notification.type";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
const Layout = ({ children }: any) => {
	const [newNotification, setNewNotifiation] = useState<NotificationType[]>([
		{ message: "", link: "", linkText: "" },
	]);

	return (
		<div style={{position: "relative"}}>
			 <TopHeader />
		
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
