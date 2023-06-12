import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuOutline, CloseOutline } from "react-ionicons";
import Logo from "../../../public/logo_white.svg";
import NavLinks from "../atoms/nav/NavLinks";
import { CloseIcon, HamburgerIcon } from "../atoms/icons";
import MobileNav from "../atoms/nav/MobileNav";
import { useSchools } from "../../../hooks/api";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { data, isLoading } = useSchools();
	const closeSideBar = () => {
		if (open) {
			setOpen(!open);
		} else console.log();
	};
	return (
		<nav className="bg-techsityPrimary_600">
			<div className="flex items-center">
				<div className="z-50 p-5 md:w-auto w-full flex">
					<Link href="/">
						<div onClick={closeSideBar} className={open ? "fixed" : ""}>
							<Image src={Logo} alt="logo" className="md:cursor-pointer w-full h-18" />
						</div>
					</Link>
					<div
						className="text-3xl md:hidden flex justify-end"
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<CloseIcon
								color="white"
								height="25"
								width="25"
								className="fixed right-5"
							/>
						) : (
							<HamburgerIcon
								color="white"
								height="25"
								width="25"
								className="absolute right-5"
							/>
						)}
					</div>
				</div>
				<ul className="md:flex absolute right-0 flex-row justify-end hidden items-center gap-8 pr-6">
					<NavLinks />
					<div className="md:block hidden">
						<button className="text-sm bg-techsitySecondary_500 px-[15px] py-[10px] rounded-[3px] text-techsityPrimary_600 font-semibold">
							<Link href="/enroll">Enroll Now</Link>
						</button>
					</div>
				</ul>
				<ul
					className={`md:hidden bg-black fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 z-40 ${
						open ? "left-0" : "left-[-100%]"
					}`}
				>
					<MobileNav closeSideBar={closeSideBar} />
					<div className="py-5">
						<button
							onClick={closeSideBar}
							className="bg-techsityPrimary_800 px-[13px] py-[10px] rounded-[5px] text-techsitySecondary_100 text-[13px]"
						>
							<Link href="/enroll">Enroll Now</Link>
						</button>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
