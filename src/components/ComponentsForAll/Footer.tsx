import Container from "./Container";
import FeatureContainers from "./FeatureContainer";
import { Link } from "react-router-dom";
const CompanyLogo = () => {
	return (
		<div className="md:flex md:justify-between md:items-center lg:flex-col lg:h-full lg:items-start">
			{/* Logo */}
			<div className="">
				<div className="">
					<Link
						to="/"
						className="mb-[2rem] "
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38">
					<defs>
						<linearGradient id="b" x1="87.629%" x2="9.97%" y1="28.473%" y2="86.882%">
							<stop offset="0%" stop-color="#34C759" stop-opacity="0"/>
							<stop offset="100%" stop-color="#34C759"/></linearGradient>
							<filter id="a" width="141.4%" height="141.4%" x="-20.7%" y="-20.7%" filterUnits="objectBoundingBox">
								<feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
								</filter>
								</defs>
								<g fill="none" fill-rule="nonzero">
									<rect stroke="#34C759" stroke-width="4" x="5" y="5" rx="4" width="28" height="28" filter="url(#a)"/>
									<rect fill="url(#b)" x="5" y="5" rx="4" width="28" height="28"/>
									</g>
									</svg>
					</Link>
					<span className="text-gray-200"> Cruip.com - All rights reserved.</span>
				</div>
			</div>
			{/* Social media */}
			<div className="flex">
				<div className="w-[40px] h-[40px] ">
					<svg
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						className=" fill-primary"
					>
						<path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
					</svg>
				</div>

				<div className="flex justify-center items-center w-[40px] h-[40px] ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						className=" fill-primary"
					>
						<path d="M12.29 14.3a.69.69 0 0 0-.416-.155h-.623v3.727h.623a.689.689 0 0 0 .416-.156.543.543 0 0 0 .21-.466v-2.488a.547.547 0 0 0-.21-.462ZM22.432 8H9.568C8.704 8 8.002 8.7 8 9.564v12.872A1.568 1.568 0 0 0 9.568 24h12.864c.864 0 1.566-.7 1.568-1.564V9.564A1.568 1.568 0 0 0 22.432 8Zm-8.925 9.257a1.631 1.631 0 0 1-1.727 1.687h-1.657v-5.909h1.692a1.631 1.631 0 0 1 1.692 1.689v2.533ZM17.1 14.09h-1.9v1.372h1.163v1.057H15.2v1.371h1.9v1.056h-2.217a.72.72 0 0 1-.74-.7v-4.471a.721.721 0 0 1 .7-.739H17.1v1.054Zm3.7 4.118c-.471 1.1-1.316.88-1.694 0l-1.372-5.172H18.9l1.058 4.064 1.056-4.062h1.164l-1.378 5.17Z"></path>
					</svg>
				</div>
				<div>
					<svg
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						className="size-8 fill-primary w-[40px] h-[40px] "
					>
						<path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
					</svg>
				</div>
			</div>
		</div>
	);
};

const LinkFooter = [
	{
		titleName: "Products",
		LinkCategory: [
			{ name: "Features", pathName: "#" },
			{ name: "Integrations", pathName: "#" },
			{ name: "Pricing & Plans", pathName: "#" },
			{ name: "Changelog", pathName: "#" },
			{ name: "Our method", pathName: "#" },
		],
	},
	{
		titleName: "Company",
		LinkCategory: [
			{ name: "About us", pathName: "#" },
			{ name: "Diversity & Inclusion", pathName: "#" },
			{ name: "Blog", pathName: "#" },
			{ name: "Careers", pathName: "#" },
			{ name: "Financial statements", pathName: "#" },
		],
	},
	{
		titleName: "Resources",
		LinkCategory: [
			{ name: "Community", pathName: "#" },
			{ name: "Terms of service", pathName: "#" },
			{ name: "Report a vulnerability", pathName: "#" },
		],
	},
	{
		titleName: "Legals",
		LinkCategory: [
			{ name: "Refund policy", pathName: "#" },
			{ name: "Terms & Conditions", pathName: "#" },
			{ name: "Privacy policy", pathName: "#" },
			{ name: "Brand Kit", pathName: "#" },
		],
	},
];

const LinkFooterDisplay = ({
	title,
	LinkCategory,
}: {
	title: string;
	LinkCategory: { [keyName: string]: string }[];
}) => {
	return (
		<div className="col-span-1">
			<div className="text-white mt-2">{title}</div>
			<ul className="">
				{LinkCategory.map((each, index) => {
					return (
						<li
							key={index}
							className="text-gray-500 -tracking-[0.01em] [&:not(:first-child)]:mt-2"
						>
							<Link to={each.pathName}>{each.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
const Footer = () => {
	return (
		<Container>
			<FeatureContainers props="py-[2rem] md:py-[3rem]">
				<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
					<div className="max-lg:order-last sm:max-md:col-span-2 md:max-lg:col-span-4  lg:col-span-2">
						<CompanyLogo></CompanyLogo>
					</div>

					{LinkFooter.map((each, index) => {
						return (
							<div key={index}>
								<LinkFooterDisplay
									title={each.titleName}
									LinkCategory={each.LinkCategory}
								></LinkFooterDisplay>
							</div>
						);
					})}
				</div>
			</FeatureContainers>
		</Container>
	);
};

export default Footer;
