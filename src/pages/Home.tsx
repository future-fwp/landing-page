import React, { useState } from "react";
import Container from "../components/All/Container";
import { Link } from "react-router-dom";
import CustomTitle from "../components/All/CustomTitle";
import CustomSubtitle from "../components/All/CustomSubtitle";
import CustomParagraphGrayText from "../components/All/CustomParagraph";
import CustomLinkWithArrow from "../components/All/CustomLinkWithArrow";
import tw from "tailwind-styled-components";
import CustomSpanPurpleGradient from "../components/All/CustomSpanPurpleGradient";
import CustomMedianHeading from "../components/All/CustomMedianHeading";
import CardFirstFeature from "../components/Home/CardFirstFeature";
import CustomHeroHeader from "../components/All/CustomHeroHeader";
import GlowGradient from "../components/Home/GlowGradient";
import CardThirdFeature from "../components/Home/CardThirdFeature";
import CardSecondandFourthFeatureSVG from "../components/Home/CardSecondandFourthFeatureSVG";
import Pricing from "../components/Pricing";
import IllustrationCenter from "../components/All/IllustrationCenter";
import IllustrationBlusTriangle from "../components/Home/IllustrationBlusTriangle";
import FeatureContainers from "../components/All/FeatureContainer";
import CardTestimonial from "../components/Home/CardTestimonial";
import LastComponent from "../components/All/LastComponent";

const testimonials = [
	{
		imageUrl: "https://preview.cruip.com/stellar/images/testimonial-01.jpg",
		altName: "Jessie J",
		content: "Jessie provided exceptional service and was extremely helpful throughout the process.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/testimonial-02.jpg",
		altName: "Mark Luk",
		content: "Mark’s attention to detail and commitment to quality is unparalleled.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/testimonial-03.jpg",
		altName: "Jeff Kahl",
		content: "Jeff’s expertise and professionalism were evident from start to finish.",
	},
];

// Array of strings containing name and position
const namesAndPositions = [
	{ name: "Jessie J", position: "Customer Service Specialist" },
	{ name: "Mark Luk", position: "Product Manager" },
	{ name: "Jeff Kahl", position: "Technical Lead" },
];

const CustomMediumHeadingInSecondFeature = ({ content }: { content: string }) => {
	return (
		<h3 className="font-semibold text-[1.25rem] leading-[1.5] pb-[0.25rem] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
			{content}
		</h3>
	);
};

// const FeatureContainer = ({ props }: { props: string }) => {
// 	return <FeatureContainers props={props}></FeatureContainers>;
// };

const CardForContainerThirdFeature = tw.div`flex overflow-scroll`;

const FeatureSecondComponent = [
	{
		title: "Filters",
		svgElement: (
			<svg
				className="size-4"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z"></path>
			</svg>
		),
		description: "Login box must find the right balance for the user convenience, privacy and security.",
	},
	{
		title: "Configurable",
		svgElement: (
			<svg
				className="size-4 "
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z"></path>
			</svg>
		),
		description: "Login box must find the right balance for the user convenience, privacy and security.",
	},
	{
		title: "Adaptable",
		svgElement: (
			<svg
				className="size-4 "
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z"></path>
			</svg>
		),
		description: "Login box must find the right balance for the user convenience, privacy and security.",
	},
	{
		title: "Authorization",
		svgElement: (
			<svg
				className="size-4 "
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z"></path>
			</svg>
		),
		description: "Login box must find the right balance for the user convenience, privacy and security.",
	},
	{
		title: "Management",
		svgElement: (
			<svg
				className="size-4 "
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z"></path>
			</svg>
		),
		description: "Login box must find the right balance for the user convenience, privacy and security.",
	},
	{
		title: "Building",
		svgElement: (
			<svg
				className="size-4 "
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z"></path>
			</svg>
		),
		description: "Login box must find the right balance for the user convenience, privacy and security.",
	},
];

const CardForFirstFeatureArray = [
	{
		svgElement: (
			<svg
				className="mr-2"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z"></path>
			</svg>
		),
		content: "Simplify your security",
		activeClick: true,
	},
	{
		svgElement: (
			<svg
				className="mr-2"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"></path>
			</svg>
		),
		content: "Customer identity",
		activeClick: false,
	},
	{
		svgElement: (
			<svg
				className="mr-2"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z"></path>
			</svg>
		),
		content: "Adaptable authentication",
		activeClick: false,
	},
];

const cardDataInthisrdFeature = [
	{
		id: 1,
		sourceImage: "./images/carousel-icon-01.svg",
		altImage: "Icon 01",
		title: "Anonymous User",
		description: "Incorporate rich user profiling, and facilitate more transactions.",
		link: "#0",
	},
	{
		id: 2,
		sourceImage: "./images/carousel-icon-02.svg",
		altImage: "Icon 02",
		title: "Bot Detection",
		description: "Incorporate rich user profiling, and facilitate more transactions.",
		link: "#0",
	},
	{
		id: 3,
		sourceImage: "./images/carousel-icon-03.svg",
		altImage: "Icon 03",
		title: "Social Integrations",
		description: "Incorporate rich user profiling, and facilitate more transactions.",
		link: "#0",
	},
	{
		id: 4,
		sourceImage: "./images/carousel-icon-04.svg",
		altImage: "Icon 04",
		title: "Progressive Profiling",
		description: "Incorporate rich user profiling, and facilitate more transactions.",
		link: "#0",
	},
	{
		id: 5,
		sourceImage: "./images/carousel-icon-05.svg",
		altImage: "Icon 05",
		title: "Secure Access",
		description: "Incorporate rich user profiling, and facilitate more transactions.",
		link: "#0",
	},
].map((each, index) => {
	return {
		...each,
		sourceImage: "https://preview.cruip.com/stellar/" + each.sourceImage.slice(1, each.sourceImage.length),
	};
});

const featureforFourthComponent = [
	{
		category: "API Authorization",
		features: [
			{
				name: "Discussions",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M13 16c-.153 0-.306-.035-.447-.105l-3.851-1.926c-.231.02-.465.031-.702.031-4.411 0-8-3.14-8-7s3.589-7 8-7 8 3.14 8 7c0 1.723-.707 3.351-2 4.63V15a1.003 1.003 0 0 1-1 1Zm-4.108-4.054c.155 0 .308.036.447.105L12 13.382v-2.187c0-.288.125-.562.341-.752C13.411 9.506 14 8.284 14 7c0-2.757-2.691-5-6-5S2 4.243 2 7s2.691 5 6 5c.266 0 .526-.02.783-.048a1.01 1.01 0 0 1 .109-.006Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
			{
				name: "Team Views",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M15 9a3.841 3.841 0 0 0-2.661 1.545A2.524 2.524 0 0 0 10 9a1 1 0 1 0 0 2c.361 0 .57.279.89 1.284C10.243 13.08 9.441 14 9 14a1 1 0 0 0 0 2 3.841 3.841 0 0 0 2.661-1.545A2.524 2.524 0 0 0 14 16a1 1 0 0 0 0-2c-.361 0-.571-.279-.89-1.284C13.757 11.92 14.559 11 15 11a1 1 0 0 0 0-2Z"></path>
						<path d="M10 8a1 1 0 0 0 0-2H7.825c.432-2.421.983-4 2.175-4a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3C7.193 0 6.313 2.9 5.793 6H3a1 1 0 1 0 0 2h2.49c-.506 3.52-1 6-2.49 6a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3c3.367 0 3.964-4.175 4.49-7.858L7.51 8H10Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
			{
				name: "Powerful Search",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5ZM15.707 14.293 13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
		],
	},
	{
		category: "User Management",
		features: [
			{
				name: "Analytics",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
			{
				name: "Notifications",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
			{
				name: "Integrations",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1ZM3 2h10v8H9v4H3V2Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
		],
	},
	{
		category: "Standard Security",
		features: [
			{
				name: "Privacy",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M15.5 11H13a5.022 5.022 0 0 1-3.453-1.4l-1.2 1.607A7.065 7.065 0 0 0 12 12.92v1.586a.5.5 0 0 0 .853.349l3-3A.5.5 0 0 0 15.5 11ZM1 5a5.022 5.022 0 0 1 3.453 1.4l1.205-1.61A7.028 7.028 0 0 0 1 3a1 1 0 1 0 0 2ZM13 5h2.5a.5.5 0 0 0 .354-.853l-3-3A.5.5 0 0 0 12 1.5v1.58a7.032 7.032 0 0 0-4.6 2.72L5 9a5.025 5.025 0 0 1-4 2 1 1 0 0 0 0 2 7.034 7.034 0 0 0 5.6-2.8L9 7a5.025 5.025 0 0 1 4-2Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
			{
				name: "Data Export",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M14 14H2a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2ZM7.293 11.707a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L9 8.586V1a1 1 0 1 0-2 0v7.586L3.707 5.293a1 1 0 0 0-1.414 1.414l5 5Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
			{
				name: "Real-Time Sync",
				svgElement: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
					>
						<path d="M14.6.085 8 2.885 1.4.085c-.5-.2-1.4-.1-1.4.9v11c0 .4.2.8.6.9l7 3c.3.1.5.1.8 0l7-3c.4-.2.6-.5.6-.9v-11c0-1-.9-1.1-1.4-.9ZM2 2.485l5 2.1v8.8l-5-2.1v-8.8Zm12 8.8-5 2.1v-8.7l5-2.1v8.7Z"></path>
					</svg>
				),
				description: "Login box must find the right balance for the user convenience, privacy, and security.",
			},
		],
	},
];

const Home = () => {
	const [cards, setCards] = React.useState(CardForFirstFeatureArray);

	const gridRef = React.useRef<HTMLDivElement>(null);

	const [position, setPosition] = React.useState({ x: 0, y: 0 }); // position glow mousepointer event ;;

	// Handle mouse movement
	const handleMouseMove = (event: MouseEvent) => {
		if (gridRef.current) {
			const rect = gridRef.current.getBoundingClientRect();
			const { clientX, clientY } = event;

			// Calculate relative position
			const x = clientX - rect.left;
			const y = clientY - rect.top;

			// Constrain the circle within the grid container
			const constrainedX = Math.min(Math.max(x, 0), rect.width);
			const constrainedY = Math.min(Math.max(y, 0), rect.height);

			setPosition({ x: constrainedX, y: constrainedY });
		}
	};

	// Effect for adding and cleaning up event listener
	React.useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	const [currentIndex, setCurrentIndex] = useState(0);

	const [currentNameIndexForTestimonial, setcurrentNameIndexForTestimonial] = useState(0);

	return (
		<>
			<main className="relative">
				{/* Home Page */}
				<section className="relative">
					<Container>
						<div className="md:pt-[13rem] md:pb-[8rem] pt-[4rem] pb-[3rem]">
							<div className="max-w-[48rem] mx-auto text-center">
								<Link
									to="#"
									className="inline-flex rounded-full items-center border px-3 py-0.5 mb-6 text-white bg-[#a855f7]"
								>
									API Studio is now in beta{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="size-4 ml-1"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
										/>
									</svg>
								</Link>
								<CustomTitle
									addlayout="pb-[1rem] "
									content={"The API Security Framework"}
								></CustomTitle>
								<CustomParagraphGrayText
									content="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
									customparagraphgrayprops="mb-[2rem] "
								></CustomParagraphGrayText>
								<ul className="inline-flex justify-center ">
									<li className="">
										<CustomLinkWithArrow
											content="Get Started"
											primary={true}
											to="#"
										></CustomLinkWithArrow>
									</li>
									<li className="inline-flex ml-3">
										<Link
											to="/"
											className="!py-1.5 !px-4 !text-white !bg-black rounded-full inline-flex items-center"
										>
											<svg
												className="fill-white mr-2"
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
											>
												<path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z"></path>
											</svg>
											Read the docs
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</Container>
					<IllustrationCenter
						position="bottom-0"
						children={
							<img
								src="https://preview.cruip.com/stellar/images/glow-bottom.svg"
								alt="hero-illustration"
								className="max-w-none h-auto"
							/>
						}
					></IllustrationCenter>
				</section>

				{/* Swiper  */}

				{/* First Features */}
				<section>
					<Container>
						{/* <div className="absolute inset-0 -z-10 transform overflow-hidden">
							<div className="absolute top-0 transform -translate-x-[50%] left-1/2 ">
								<img
									src="https://preview.cruip.com/stellar/images/glow-top.svg"
									alt="glow-image"
									className="max-w-none h-auto  "
									width={1476}
									height={774}
								/>
							</div>
						</div> */}
						<IllustrationCenter
							position="top-0"
							children={
								<img
									src="https://preview.cruip.com/stellar/images/glow-top.svg"
									alt="glow-image"
									className="max-w-none h-auto  "
									width={1476}
									height={774}
								/>
							}
						></IllustrationCenter>
						<FeatureContainers props="md:pt-[13rem] md:pb-[5rem] pt-[4rem] pb-[3rem] ">
							<div className="flex flex-col-reverse md:flex-row  md:justify-between">
								{/* content  */}
								<div className="md:w-[58.333%] w-full max-md:text-center">
									<CustomSpanPurpleGradient
										content="The security first platform"
										addlayout={"pb-[0.75rem]"}
									></CustomSpanPurpleGradient>
									<CustomMedianHeading
										content="Simplify your security with authentication services"
										addlayout="pb-[0.75rem] "
									></CustomMedianHeading>
									<CustomParagraphGrayText
										content="Define access roles for the end-users, and extend your authorization capabilities to implement dynamic access control."
										customparagraphgrayprops="mb-[2rem] "
									></CustomParagraphGrayText>
									<div className="mt-[2rem] max-w-[20rem] ">
										{cards.map((each, index) => {
											return (
												<CardFirstFeature
													key={JSON.stringify(each) + index}
													activeClick={each.activeClick}
													svgElement={each.svgElement}
													content={each.content}
													setCards={setCards}
													index={index}
												></CardFirstFeature>
											);
										})}
									</div>
								</div>

								{/* image-radial gradient  */}
								<div className="md:w-[calc(100%-58.333%)] w-full border min-h-auto text-white">
									this is radial picture created by canvas
								</div>
							</div>
						</FeatureContainers>
					</Container>
				</section>
				{/* Second Feature */}
				<section>
					<Container>
						<FeatureContainers props="md:pt-[8rem]  pt-[4rem] ">
							<CustomHeroHeader
								CustomTitle={
									<CustomSubtitle
										content="Faster. Smarter."
										addlayout="pb-[2rem] "
									></CustomSubtitle>
								}
								CustomParagraphText={
									<CustomParagraphGrayText
										content="There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
										customparagraphgrayprops=""
									></CustomParagraphGrayText>
								}
							/>
							<div className="grid grid-cols-1 bg-inherit md:grid-cols-12 gap-6 relative overflow-hidden pb-[1.5rem] ">
								<div className="md:col-span-12 border-gray-600 border relative">
									<div
										className="flex flex-col-reverse md:flex-row md:justify-between relative"
										ref={gridRef}
									>
										<div className="flex items-center">
											<div className=" md:pr-0 p-[2rem] max-md:pt-0">
												<div className="mb-[1.25rem]">
													<CustomMediumHeadingInSecondFeature content="Optimized for security" />
													<p className="text-[#94A3B8]">
														Optimize for user experience and privacy. Use social login integrations, lower
														user friction, incorporate rich user profiling, and facilitate more
														transactions.
													</p>
												</div>

												<CustomLinkWithArrow
													content="Learn more"
													primary={false}
													to="#"
												/>
											</div>
										</div>
										<div className="max-md:-mt-24 -mr-10 ">
											<img
												src="https://preview.cruip.com/stellar/images/feature-image-01.png"
												alt=""
												className="min-h-full"
											/>
										</div>

										<div
											// Use inline styles for dynamic positioning
											style={{
												top: `${position.y - 150}px`,
												left: `${position.x - 150}px`,
											}}
											className="absolute bg-purple-600/20 blur-2xl w-[300px] h-[300px] rounded-full transition-transform duration-100 ease-out"
										></div>
										<IllustrationBlusTriangle position="right-0"></IllustrationBlusTriangle>
										<IllustrationCenter
											position="bottom-0"
											children={
												<div className="bg-purple-400/40 flex items-end rounded-t-full blur-3xl justify-center w-[300px] h-[150px] ">
													<div className="w-[150px] h-[75px] bg-purple-600  rounded-t-full"></div>
												</div>
											}
										></IllustrationCenter>
									</div>
								</div>

								<div className="md:col-span-7 border border-gray-600">
									<div className="flex flex-col-reverse md:flex-col relative">
										<div className="flex items-center">
											<div className="p-[2rem] ">
												<div className="mb-[1.25rem]">
													<CustomMediumHeadingInSecondFeature content="Extensibility" />
													<p className="text-[#94A3B8]">
														Your login box must find the right balance between user convenience, privacy
														and security.
													</p>
												</div>
											</div>
										</div>
										<div className=" flex justify-center">
											<img
												src="https://preview.cruip.com/stellar/images/feature-image-02.png"
												alt=""
												className="min-h-full"
											/>
										</div>
									</div>
								</div>

								<div className="md:col-span-5 border border-gray-600">
									<div className="flex flex-col-reverse md:flex-col relative">
										<div className="flex items-center">
											<div className="p-[2rem] ">
												<div className="mb-[1.25rem]">
													<CustomMediumHeadingInSecondFeature content="Infinite options" />
													<p className="text-[#94A3B8]">
														Quickly apply filters to refine your issues lists and create custom views.
													</p>
												</div>
											</div>
										</div>
										<div className=" flex justify-center">
											<img
												src="https://preview.cruip.com/stellar/images/feature-image-03.png"
												alt=""
												className="min-h-full"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="grid md:grid-cols-3 gap-6">
								{FeatureSecondComponent.map((each, index) => {
									return (
										<CardSecondandFourthFeatureSVG
											key={index}
											svgElement={each.svgElement}
											title={each.title}
											description={each.description}
										/>
									);
								})}
							</div>
						</FeatureContainers>
					</Container>
				</section>
				<section>
					<Container>
						{/* Second Feature */}
						<IllustrationCenter
							children={
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="434"
									height="427"
									className="blur-3xl"
								>
									<defs>
										<linearGradient
											id="bs3-a"
											x1="19.609%"
											x2="50%"
											y1="14.544%"
											y2="100%"
										>
											<stop
												offset="0%"
												stop-color="#6366F1"
											></stop>
											<stop
												offset="100%"
												stop-color="#6366F1"
												stop-opacity="0"
											></stop>
										</linearGradient>
									</defs>
									<path
										fill="url(#bs3-a)"
										fill-rule="evenodd"
										d="m410 0 461 369-284 58z"
										transform="matrix(1 0 0 -1 -410 427)"
									></path>
								</svg>
							}
							position="top-0"
						></IllustrationCenter>
						<FeatureContainers props="md:pt-[8rem]  pt-[4rem] md:pb-[5rem] pb-[3rem]">
							<CustomHeroHeader
								CustomTitle={
									<CustomSubtitle
										content="More than a login box"
										addlayout="pb-[2rem] "
									></CustomSubtitle>
								}
								CustomParagraphText={
									<CustomParagraphGrayText
										content="There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
										customparagraphgrayprops=""
									></CustomParagraphGrayText>
								}
							/>
							<div className="max-w-[48rem] mx-auto relative border">
								<img
									src="https://preview.cruip.com/stellar/images/feature-image-04.png"
									alt=""
									className="max-w-full h-auto"
								/>
								<div className="bg-purple-600/80 -z-10 blur-3xl absolute w-[400px] h-[200px] rounded-t-full bottom-[24px] md:bottom-[40px] left-[calc(50%-200px)] "></div>
							</div>
						</FeatureContainers>
					</Container>
				</section>
				<section>
					<Container>
						{/* Third Feature */}
						<FeatureContainers props="md:pt-[5rem] md:pt-[3rem]">
							<CustomHeroHeader
								CustomSpanPurpleGradient={
									<CustomSpanPurpleGradient
										content="The security first platform"
										addlayout="pb-[2rem] "
									></CustomSpanPurpleGradient>
								}
								CustomTitle={
									<CustomSubtitle
										content="Spot issues faster"
										addlayout="pb-[2rem] "
									></CustomSubtitle>
								}
								CustomParagraphText={
									<CustomParagraphGrayText
										content="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
										customparagraphgrayprops=""
									></CustomParagraphGrayText>
								}
							/>

							<CardForContainerThirdFeature>
								{cardDataInthisrdFeature.map((each, index) => (
									<CardThirdFeature
										key={index}
										sourceImage={each.sourceImage}
										altImage={each.altImage}
										title={each.title}
										description={each.description}
										link={each.link}
										currentGradient={index === currentIndex}
									/>
								))}
							</CardForContainerThirdFeature>
							<div className="mt-[2rem]">
								<div className="flex justify-end">
									<div className=" w-[3rem] h-[3rem] flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											className={`size-6 ${
												currentIndex === 0 ? "stroke-gray-500" : "stroke-white"
											} hover:!stroke-purple-500`}
											onClick={() => {
												if (currentIndex === 0) {
													setCurrentIndex(0);
												} else {
													setCurrentIndex(currentIndex - 1);
												}
											}}
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
											/>
										</svg>
									</div>
									<div className="border w-[3rem] h-[3rem] flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="white"
											className={`size-6 ${
												currentIndex === 4 ? "stroke-gray-500" : "stroke-white"
											} hover:!stroke-purple-500`}
											onClick={() => {
												currentIndex === 4 ? setCurrentIndex(4) : setCurrentIndex(currentIndex + 1);
											}}
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
											/>
										</svg>
									</div>
								</div>
							</div>
						</FeatureContainers>
					</Container>
				</section>
				<section className="relative">
					{/* Fourth Feature */}
					<IllustrationCenter
						children={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="434"
								height="427"
								className="blur-3xl"
							>
								<defs>
									<linearGradient
										id="bs4-a"
										x1="19.609%"
										x2="50%"
										y1="14.544%"
										y2="100%"
									>
										<stop
											offset="0%"
											stop-color="#A855F7"
										></stop>
										<stop
											offset="100%"
											stop-color="#6366F1"
											stop-opacity="0"
										></stop>
									</linearGradient>
								</defs>
								<path
									fill="url(#bs4-a)"
									fill-rule="evenodd"
									d="m0 0 461 369-284 58z"
									transform="matrix(1 0 0 -1 0 427)"
								></path>
							</svg>
						}
						position="top-0 !left-[200px] min-[1152px]:!left-[calc((100vw-1152px)/2+200px)]" // custom position of left
					></IllustrationCenter>
					<Container>
						<FeatureContainers props="pt-[4rem] md:pt-[3rem]">
							<div className="max-w-[48rem] pb-[2rem] ">
								<CustomSubtitle
									content="Why trust us?"
									addlayout="!text-left pb-[2rem] !inline-flex"
								></CustomSubtitle>
								<CustomParagraphGrayText
									customparagraphgrayprops="!text-left"
									content="Many desktop publishing packages and web page editors now use lorem ipsum as their default model text, and a search will uncover many web sites still in their infancy."
								></CustomParagraphGrayText>
							</div>

							{featureforFourthComponent.map((each, index) => {
								return (
									<div
										className="py-4 first:pt-0"
										key={index}
									>
										<CustomSpanPurpleGradient
											content={each.category}
											addlayout="pb-[2rem]"
										></CustomSpanPurpleGradient>

										<div className="grid md:grid-cols-3 gap-6">
											{each.features.map((each, index) => {
												return (
													<CardSecondandFourthFeatureSVG
														key={index}
														svgElement={each.svgElement}
														title={each.name}
														description={each.description}
													></CardSecondandFourthFeatureSVG>
												);
											})}
										</div>
									</div>
								);
							})}
						</FeatureContainers>
					</Container>
				</section>
				<section>
					<Container>
						<FeatureContainers props="md:py-[5rem] py-[3rem] ">
							<IllustrationCenter
								children={
									<div className="bg-purple-700 w-[300px] h-[150px] blur-3xl rounded-b-full flex justify-center ">
										<div className="bg-purple-500 w-[80px] h-[40px] rounded-b-full"></div>
									</div>
								}
								position="top-0 left-1/2"
							></IllustrationCenter>
							<CustomHeroHeader
								CustomParagraphText={
									<CustomParagraphGrayText
										content="
All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
										customparagraphgrayprops=""
									></CustomParagraphGrayText>
								}
								CustomTitle={
									<CustomSubtitle
										content="Flexible plans and features"
										addlayout="pb-[1rem] "
									></CustomSubtitle>
								}
								CustomSpanPurpleGradient={
									<CustomSpanPurpleGradient
										content="Pricing plans"
										addlayout=""
									></CustomSpanPurpleGradient>
								}
							></CustomHeroHeader>
							<Pricing></Pricing>
							<IllustrationCenter
								children={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="434"
										height="427"
										className="blur-[64px]"
									>
										<defs>
											<linearGradient
												id="bs5-a"
												x1="19.609%"
												x2="50%"
												y1="14.544%"
												y2="100%"
											>
												<stop
													offset="0%"
													stop-color="#A855F7"
												></stop>
												<stop
													offset="100%"
													stop-color="#6366F1"
													stop-opacity="0"
												></stop>
											</linearGradient>
										</defs>
										<path
											fill="url(#bs5-a)"
											fill-rule="evenodd"
											d="m661 736 461 369-284 58z"
											transform="matrix(1 0 0 -1 -661 1163)"
										></path>
									</svg>
								}
								position="left-1/2 bottom-0"
							/>
						</FeatureContainers>
					</Container>
				</section>
				<section>
					<div className="md:px-6 px-4 mx-auto max-w-[48rem] ">
						<FeatureContainers props="md:pb-[5rem] pb-[3rem] ">
							{testimonials.map((each, index) => {
								return (
									<>
										{currentNameIndexForTestimonial === index && (
											<CardTestimonial
												imageUrl={each.imageUrl}
												key={index}
												content={each.content}
												altImage={each.altName}
											></CardTestimonial>
										)}
									</>
								);
							})}
							<div className="flex  max-md:max-w-[300px] mx-auto flex-col md:flex-row justify-center ">
								{namesAndPositions.map((each, index) => {
									return (
										<button
											key={index}
											className={`${
												currentNameIndexForTestimonial === index
													? "border text-white "
													: "border-gray-400 border text-gray-400"
											} px-3 py-1.5 m-1.5 text-[0.875rem] rounded-full`}
											onClick={() => {
												console.log("clicked");
												setcurrentNameIndexForTestimonial(index);
												console.log(currentNameIndexForTestimonial);
											}}
										>
											{each.name} {each.position}
										</button>
									);
								})}
							</div>
						</FeatureContainers>
					</div>
				</section>
				<LastComponent
					contentforSpanPurpleGradient="The security first platform"
					HeaderText="Take control of your business"
					DescriptionText="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
					LinkText="Get started"
				></LastComponent>
			</main>
		</>
	);
};

export default Home;
