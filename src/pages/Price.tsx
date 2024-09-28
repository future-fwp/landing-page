import React from "react";
import Pricing from "../components/Pricing";
import Container from "../components/All/Container";
import CustomHeroHeader from "../components/All/CustomHeroHeader";
import FeatureContainers from "../components/All/FeatureContainer";
import CustomTitle from "../components/All/CustomTitle";
import CustomSpanPurpleGradient from "../components/All/CustomSpanPurpleGradient";
import CustomParagraphGrayText from "../components/All/CustomParagraph";
import IllustrationCenter from "../components/All/IllustrationCenter";
import CustomSubtitle from "../components/All/CustomSubtitle";
import CardVariation from "../components/Price/CardVariation";
import CardCustomer from "../components/Price/CardCustomer";
import GridLayOut from "../components/All/GridLayOut";
import CardFaq from "../components/Price/CardFaq";

import LastComponent from "../components/All/LastComponent";
const images = [
	{
		src: "https://preview.cruip.com/stellar/images/pricing-icon-01.svg",
		alt: "pricing-icon-01.svg",
		className: "-rotate-6 opacity-10",
		width: "30px",
	},
	{
		src: "https://preview.cruip.com/stellar/images/pricing-icon-02.svg",
		alt: "pricing-icon-02.svg",
		className: "rotate-6 opacity-30",
		width: "50px",
	},
	{
		src: "https://preview.cruip.com/stellar/images/pricing-icon-03.svg",
		alt: "pricing-icon-03.svg",
		className: "opacity-40 -rotate-12",
		width: "70px",
	},
	{
		src: "https://preview.cruip.com/stellar/images/pricing-icon-04.svg",
		alt: "pricing-icon-04.svg",
		className: "opacity-100 rotate-0",
		width: "90px",
	},
	{
		src: "https://preview.cruip.com/stellar/images/pricing-icon-05.svg",
		alt: "pricing-icon-05.svg",
		className: "opacity-40 rotate-12",
		width: "70px",
	},
	{
		src: "https://preview.cruip.com/stellar/images/pricing-icon-06.svg",
		alt: "pricing-icon-06.svg",
		className: "rotate-6 opacity-30",
		width: "50px",
	},
	{
		src: "https://preview.cruip.com/stellar/images/pricing-icon-07.svg",
		alt: "pricing-icon-07.svg",
		className: "-rotate-6 opacity-10",
		width: "30px",
	},
];

const keyFeatures = [
	{
		key: "Purpose-built for company that requires more than a",
		feature: "simple plan ",
		lastKey: "with security infrastructure.",
	},
	{
		key: "AI-powered to",
		feature: "remove the burdens ",
		lastKey: "of tedious knowledge management and security tasks.",
	},
	{
		key: "There's no prioritized support in Stellar. You can use email or live chat and you will hear back in a ",
		feature: "couple of hours.",
	},
	{
		key: "Comprehensive  ",
		feature: "developer docs",
		lastKey: "and a centralized support center packed many resources.",
	},
	{
		key: "No upcharges—and we'd never upsell you to a higher plan or a",
		feature: "dedicated IP ",
		lastKey: "to improve deliverability.",
	},
	{
		key: "Tool training, dedicated resources, and",
		feature: "regular updates ",
		lastKey: "are available for both small and large teams.",
	},
];
const customers = [
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-01.jpg",
		name: "Mike Smets",
		tagName: "@MikeSmets",
		rating: 5, // Assuming a rating of 5 stars for each customer based on the SVG
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-02.jpg",
		name: "Mike Bryan",
		tagName: "@mike0point7",
		rating: 5,
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-03.jpg",
		name: "Liz Park",
		tagName: "@liz-park82",
		rating: 5,
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-04.jpg",
		name: "Jessie Maison",
		tagName: "@jessiem9",
		rating: 5,
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-05.jpg",
		name: "Devani Janssen",
		tagName: "@deva07p",
		rating: 5,
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-06.jpg",
		name: "Mark Gerkules",
		tagName: "@mark-gerk",
		rating: 5,
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-07.jpg",
		name: "Andrey Propenk",
		tagName: "@andrey-prok",
		rating: 5,
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-08.jpg",
		name: "Jay Master",
		tagName: "@masterpro",
		rating: 5,
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
	{
		imageUrl: "https://preview.cruip.com/stellar/images/customer-09.jpg",
		name: "Steve Wolf",
		tagName: "@imsteve",
		rating: 5,
		comment:
			"I love Stellar, is super easy to use with top notch features. My favourites are the affiliates and the lovely login box that converts like magic.",
	},
];

const faqs = [
	{
		question: "What is Stellar?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
	},
	{
		question: "What's an affordable alternative to Stellar?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
	},
	{
		question: "Can I remove the 'Powered by Stellar' branding?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
	},
	{
		question: "What kind of data can I collect from my customers?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
	},
	{
		question: "Can I use Stellar for free?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
	},
	{
		question: "Is Stellar affordable for small businesses?",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.",
	},
];

const Price = () => {
	return (
		<main>
			<section className="relative">
				<Container>
					<FeatureContainers props="md:pt-[10rem] md:pb-[6rem] pt-[8rem] pb-[5rem] ">
						<CustomHeroHeader
							CustomTitle={
								<CustomTitle
									content="Simple plans for everyone"
									addlayout="pb-[1rem] "
								></CustomTitle>
							}
							addlayout="!max-w-none"
							CustomParagraphText={
								<CustomParagraphGrayText
									content="Cut down overhead costs and ditch clunky software. Get a flexible, purpose-built tool to simplify your security with authentication services."
									customparagraphgrayprops="max-w-[48rem] mx-auto"
								/>
							}
							CustomSpanPurpleGradient={
								<CustomSpanPurpleGradient
									content="The security first platform"
									addlayout=""
								></CustomSpanPurpleGradient>
							}
						/>
						<FeatureContainers props="relative pb-[3rem] md:pb-[5rem] relative">
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
					</FeatureContainers>
				</Container>

				<IllustrationCenter
					children={
						<img
							className="blur-3xl max-w-none"
							src="https://preview.cruip.com/stellar/images/page-illustration.svg"
							alt="Integrations-illustration"
						></img>
					}
					position="top-0 left-1/2"
				></IllustrationCenter>

				<IllustrationCenter
					children={
						<div className="bg-purple-700 w-[400px] h-[200px] blur-3xl rounded-b-full flex justify-center ">
							<div className="bg-purple-500 w-[80px] h-[40px] rounded-b-full"></div>
						</div>
					}
					position="top-0"
				/>
			</section>
			<section className="relative">
				<Container>
					<FeatureContainers props="pb-[3rem] md:pb-[5rem] ">
						<CustomHeroHeader
							CustomTitle={
								<CustomSubtitle
									content="Stop overpaying for software"
									addlayout="pb-[1rem]"
								/>
							}
							CustomParagraphText={
								<CustomParagraphGrayText
									content="There are many variations available, but the majority have suffered alteration in some form, by injected humour."
									customparagraphgrayprops=""
								></CustomParagraphGrayText>
							}
						></CustomHeroHeader>
						<FeatureContainers props="pb-[2rem] relative flex justify-center">
							<img
								src="https://preview.cruip.com/stellar/images/pricing-illustration.svg"
								alt="image-illustration"
								className=""
							/>
							<FeatureContainers props="flex justify-center absolute inset-y-[calc(50%-70px)]">
								<FeatureContainers props="flex justify-center">
									{images.map((image, index) => (
										<img
											key={index}
											src={image.src}
											alt={image.alt}
											className={`${image.className} w-[${image.width}]`}
										/>
									))}
								</FeatureContainers>
							</FeatureContainers>
						</FeatureContainers>
						<GridLayOut
							smallSpan={"sm:grid-cols-1"}
							mediumSpan={"md:grid-cols-2"}
							largeSpan={"lg:grid-cols-3"}
							gapElement={"gap-6"}
						>
							{keyFeatures.map((each, index) => {
								return (
									<CardVariation
										key={index}
										keyText={each.key}
										feature={each.feature}
										lastKey={each.lastKey}
									></CardVariation>
								);
							})}
						</GridLayOut>
					</FeatureContainers>
				</Container>
			</section>
			<section className="relative">
				<Container>
					<FeatureContainers props="md:py-[5rem] py-[3rem] ">
						<div className="max-lg:mx-auto max-lg:max-w-[20rem] ">
							<GridLayOut
								smallSpan={"sm:grid-cols-1"}
								mediumSpan={"md:grid-cols-1"}
								largeSpan={"lg:grid-cols-3"}
								gapElement={"gap-6"}
							>
								{customers.map((each, index) => {
									return (
										<CardCustomer
											key={index}
											Name={each.name}
											tagName={each.tagName}
											imageUrl={each.imageUrl}
											rating={each.rating}
											comment={each.comment}
										></CardCustomer>
									);
								})}
							</GridLayOut>
						</div>
					</FeatureContainers>
				</Container>
				<IllustrationCenter
					children={
						<div className="bg-purple-700 w-[300px] h-[150px] blur-3xl rounded-b-full flex justify-center ">
							<div className="bg-purple-500 w-[80px] h-[40px] rounded-b-full"></div>
						</div>
					}
					position="top-0 left-1/2"
				></IllustrationCenter>
			</section>
			<section>
				<Container>
					<FeatureContainers props="md:py-[5rem] py-[3rem]">
						<CustomHeroHeader
							CustomTitle={
								<CustomSubtitle
									content="Everything you need to know"
									addlayout="pb-[1rem] "
								/>
							}
							CustomSpanPurpleGradient={
								<CustomSpanPurpleGradient
									content="Getting started with Stellar"
									addlayout="pb-[0.75rem]"
								></CustomSpanPurpleGradient>
							}
						></CustomHeroHeader>
						<div className="md:flex md:flex-wrap md:gap-4">
							{faqs.map((each, index) => (
								<div
									key={index}
									className="flex-1 md:min-w-[calc(50%_-_1rem)]"
								>
									<CardFaq {...each} />
								</div>
							))}
						</div>
					</FeatureContainers>
				</Container>
			</section>
			<LastComponent
				contentforSpanPurpleGradient="The security first platform"
				HeaderText="Take control of your business"
				DescriptionText="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
				LinkText="Get started"
			></LastComponent>
		</main>
	);
};

export default Price;
