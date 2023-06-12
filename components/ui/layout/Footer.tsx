import React from "react";
import Logo from "../../../public/logo_white.svg";
import FB_Logo from "../../../public/footer/fb.png";
import IG_Logo from "../../../public/footer/ig.png";
import LD_Logo from "../../../public/footer/linkedin.png";
import TW_Logo from "../../../public/footer/twitter.png";
import Image from "next/image";
import Link from "next/link";
import { useAllCourses, useSchools } from "../../../hooks/api";
const Footer = () => {
	const { data, isLoading } = useSchools();
	return (
		<footer className="bg-techsityPrimary_600 md:px-10 px-5">
			<div className="container mx-auto px-4 mb-10 pt-5">
				<div className="flex flex-wrap justify-between space-y-5 md:pr-9">
					<div className="max-w-full md:max-w-xs mt-5">
						<Link href="/">
							<div className="mb-5">
								<Image src={Logo} alt="logo" className="md:cursor-pointer h-9" />
							</div>
						</Link>
						<div className="space-y-5">
							<p className="text-[15px] text-techsityPrimary_200">
								At Techsity, our goal is to help individuals and businesses unleash
								their full potential and build successful careers in technology.
							</p>
							<p className="text-[15px] text-techsityPrimary_200">
								Plot 9 Gbagada - Oworonshoki Expy, beside UPS, Araromi 105102, Lagos
							</p>
						</div>
					</div>
					<div className="w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 pt-10 lg:pt-0 text-techsityPrimary_200">
						<div className=" mb-10 relative w-3/6 md:w-auto">
							<p className="text-techsityPrimary_200 mb-5 text-[18px]">Our Schools</p>
							<ul className="space-y-4 text-default text-xs md:text-sm">
								{data &&
									data.data.map((school: any, i: any) => (
										<li className="cursor-pointer" key={school.id}>
											<Link href={`/schools/${school.attributes.slug}`}>
												{school.attributes.schoolName}
											</Link>
										</li>
									))}
							</ul>
						</div>
						<div className="mb-10 relative w-3/6 md:w-auto">
							<p className="text-techsityPrimary_200 mb-5 text-[18px]">Top Courses</p>
							<ul className="space-y-4 text-default text-xs md:text-sm">
								<Link href="/course/engineering?software-engineering-frontend">
									<li className="cursor-pointer">Software Engineering - Frontend</li>
								</Link>
								<Link href="/course/design?product-design">
									<li className="cursor-pointer">Product Design</li>
								</Link>
								<Link href="/course/data?data-science">
									<li className="cursor-pointer">Data Science</li>
								</Link>
							</ul>
						</div>
						<div className="mb-10 relative w-3/6 md:w-auto">
							<p className="text-techsityPrimary_200 mb-5 text-[18px]">Company</p>
							<ul className="space-y-4 text-default text-xs md:text-sm">
								<Link href="/company/about">
									<li className="cursor-pointer">About us</li>
								</Link>
								<Link href="/company/career">
									<li className="cursor-pointer">Careers</li>
								</Link>
								<Link href="/blog">
									<li className="cursor-pointer">Blog</li>
								</Link>
								{/* <Link href="/blog">
                  <li className="cursor-pointer">Blog</li>
                </Link> */}
							</ul>
						</div>
						<div className="mb-10 relative w-3/6 md:w-auto">
							<p className="text-techsityPrimary_200 mb-5 text-[18px]">Policies</p>
							<ul className="space-y-4 text-default text-xs md:text-sm">
								<Link href="/policies/terms">
									<li className="cursor-pointer">Terms & Conditions</li>
								</Link>
								<Link href="/policies/privacy-policy">
									<li className="cursor-pointer">Privacy Policy</li>
								</Link>
								<Link href="/policies/refund-policy">
									<li className="cursor-pointer">Refund Policy</li>
								</Link>
							</ul>
						</div>
						<div className=" mb-10 relative w-3/6 md:w-auto">
							<p className="text-techsityPrimary_200 mb-5 text-[18px]">Talk to Us</p>
							<ul className="space-y-4 text-default text-xs md:text-sm">
								<a href="tel:+2347016252881" target="_blank" rel="noreferrer">
									<li className="cursor-pointer">+2347016252881</li>
								</a>
								<a href="mailto:info@techsity.io" target="_blank" rel="noreferrer">
									<li className="cursor-pointer">info@techsity.io</li>
								</a>
								<a href="mailto:school@techsity.io" target="_blank" rel="noreferrer">
									<li className="cursor-pointer">school@techsity.io</li>
								</a>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* <hr className="border-techsitySecondary_600" /> */}
			<div className="container mx-auto px-4">
				<div className="md:flex flex-wrap justify-between items-center block space-y-5 md:pr-9 pt-10 pb-10">
					<p className="text-techsityPrimary_200">
						Copyright © {new Date().getFullYear()}. Techsity Inc
					</p>
					<div className="flex flex-row md:justify-between">
						<a
							href="https://web.facebook.com/techsityinc"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								className="cursor-pointer"
								alt="Facebook Logo"
								src={FB_Logo}
								width={30}
								height={30}
							/>
						</a>
						<a
							href="https://twitter.com/techsityinc"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								className="cursor-pointer"
								alt="Twitter Logo"
								src={TW_Logo}
								width={30}
								height={30}
							/>
						</a>
						<a
							href="https://www.instagram.com/techsityinc/"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								className="cursor-pointer"
								alt="Instagram Logo"
								src={IG_Logo}
								width={30}
								height={30}
							/>
						</a>
						<a
							href="https://www.linkedin.com/company/techsityinc/"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								className="cursor-pointer"
								alt="Linkedin Logo"
								src={LD_Logo}
								width={30}
								height={30}
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
