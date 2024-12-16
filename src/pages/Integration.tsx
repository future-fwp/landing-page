import { useState, useRef, useEffect } from "react";
import Container from "../components/ComponentsForAll/Container";
import FeatureContainers from "../components/ComponentsForAll/FeatureContainer";
import CustomSpanGreenGradient from "../components/ComponentsForAll/CustomSpanGreenGradient";
import CustomTitle from "../components/ComponentsForAll/CustomTitle";
import IllustrationCenter from "../components/ComponentsForAll/IllustrationCenter";
import CustomParagraphGrayText from "../components/ComponentsForAll/CustomParagraph";
import CustomHeroHeader from "../components/ComponentsForAll/CustomHeroHeader";
import GroupLayOut from "../components/Integration/GroupLayOut";
import gsap from "gsap";
const cardData = [
	{
		webappName: "Retool",
		description:
			"Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
		listImageUrlOfPeople: [
			"./images/avatar-01.jpg",
			"./images/avatar-02.jpg",
			"./images/avatar-03.jpg",
			"./images/avatar-04.jpg",
		],
		numberpeopleLikes: "2.3K",
		sourceImage: "./images/integrations-01.svg",
		haveStar: true,
	},
	{
		webappName: "Zapier",
		description:
			"Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
		listImageUrlOfPeople: ["./images/avatar-05.jpg", "./images/avatar-06.jpg", "./images/avatar-07.jpg"],
		numberpeopleLikes: "4.5K",
		sourceImage: "./images/integrations-02.svg",
		haveStar: true,
	},
	{
		webappName: "Airtable",
		description:
			"Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
		listImageUrlOfPeople: [
			"./images/avatar-08.jpg",
			"./images/avatar-09.jpg",
			"./images/avatar-10.jpg",
			"./images/avatar-11.jpg",
		],
		numberpeopleLikes: "4.7K",
		sourceImage: "./images/integrations-03.svg",
		haveStar: true,
	},
	{
		webappName: "Jira",
		description:
			"Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
		listImageUrlOfPeople: [
			"./images/avatar-12.jpg",
			"./images/avatar-13.jpg",
			"./images/avatar-14.jpg",
			"./images/avatar-15.jpg",
		],
		numberpeopleLikes: "4.4K",
		sourceImage: "./images/integrations-04.svg",
		haveStar: true,
	},
	{
		webappName: "GitLab",
		description:
			"Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
		listImageUrlOfPeople: [
			"./images/avatar-16.jpg",
			"./images/avatar-17.jpg",
			"./images/avatar-18.jpg",
			"./images/avatar-19.jpg",
		],
		numberpeopleLikes: "3.4K",
		sourceImage: "./images/integrations-05.svg",
		haveStar: true,
	},
];

const updatedCards = cardData.map((card) => {
	// Update the sourceImage path
	const updatedSourceImage = card.sourceImage.replace(".", "https://preview.cruip.com/stellar");

	// Update each image path in listImageUrlOfPeople
	const updatedListImageUrlOfPeople = card.listImageUrlOfPeople.map((url) =>
		url.replace(".", "https://preview.cruip.com/stellar")
	);

	return {
		...card,
		sourceImage: updatedSourceImage,
		listImageUrlOfPeople: updatedListImageUrlOfPeople,
	};
});

const svgCategories = [
	{
		svgElement: (
			<svg
				className="fill-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M7.7 7.3l-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.6 8l-4.3 4.3c-.4.4-.4 1 0 1.4ZM8 12h7v2H8z"></path>
			</svg>
		),
		category: "Engineering",
	},
	{
		svgElement: (
			<svg
				className="fill-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M10 15c-.4 0-.8-.3-.9-.7L5.8 4.6 3.9 8.4c-.2.4-.5.6-.9.6H0V7h2.4l2.7-5.4c.2-.4.6-.6 1-.6s.7.3.9.7l3.2 9.7 1.9-3.8c.2-.4.5-.6.9-.6h3v2h-2.4l-2.7 5.4c-.2.4-.5.6-.9.6Z"></path>
			</svg>
		),
		category: "No-code",
	},
	{
		svgElement: (
			<svg
				className="fill-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M7.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 15.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 10.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z"></path>
			</svg>
		),
		category: "Collaboration",
	},
	{
		svgElement: (
			<svg
				className="fill-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
			>
				<path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z"></path>
				<path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z"></path>
			</svg>
		),
		category: "Productivity",
	},
];

import LastComponent from "../components/ComponentsForAll/LastComponent";
import CardComment from "../components/Integration/CardComment";
const Integration = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const maxIndex = updatedCards.length - 1;


	

	return (
		<div>
			<section>
				<IllustrationCenter
					children={
						<img
							className="blur-3xl max-w-none opacity-30"
							src="https://preview.cruip.com/stellar/images/page-illustration.svg"
							alt="Integrations-illustration"
						></img>
					}
					position="top-0 left-1/2"
				></IllustrationCenter>
				<IllustrationCenter
					children={
						<div className="bg-emerald-600 w-[400px] h-[200px] blur-3xl rounded-b-full flex justify-center opacity-30">
							<div className="bg-emerald-400 w-[80px] h-[40px] rounded-b-full"></div>
						</div>
					}
					position="top-0"
				/>
				<Container>
					<FeatureContainers props="pt-[8rem] md:pt-[10rem] ">
						<CustomHeroHeader
							CustomTitle={
								<CustomTitle
									addlayout="pb-[1rem] "
									content="Make Stellar uniquely yours"
								></CustomTitle>
							}
							CustomParagraphText={
								<CustomParagraphGrayText
									customparagraphgrayprops="max-w-[48rem] mx-auto "
									content="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
								></CustomParagraphGrayText>
							}
							CustomSpanGreenGradient={
								<CustomSpanGreenGradient
									addlayout="pb-3"
									content="Integrations & Add-ons"
								></CustomSpanGreenGradient>
							}
							addlayout="!max-w-none"
						></CustomHeroHeader>
					</FeatureContainers>
				</Container>
			</section>
			<section className="relative">
				<FeatureContainers props="bg-black pb-[3rem] md:pb-[5rem] relative flex items-center flex-col ">
					<div className="*:min-w-[400px] flex max-w-[calc(100vw-250px)] overflow-scroll overflow-x-hidden ">
						<div className=" w-[200px]  left-0 absolute"></div>
						{updatedCards.map((each, index) => {
							 const boxRef = useRef<HTMLDivElement>(null);
							 const leftSideRef = useRef<HTMLSpanElement>(null);
							 const topSideRef = useRef<HTMLSpanElement>(null);
							 const rightSideRef = useRef<HTMLSpanElement>(null);
							 const bottomSideRef = useRef<HTMLSpanElement>(null);

							const borderColor = '#CC0000' 

							 useEffect(() => {
								if (!boxRef.current) return;
							
								const tl = gsap.timeline({ 
								  repeat: -1, 
								  yoyo: true 
								});
							
								// Top side animation
								tl.fromTo(
								  topSideRef.current, 
								  { 
									width: 0, 
									backgroundColor: borderColor 
								  }, 
								  { 
									width: '100%', 
									backgroundColor: borderColor,
									duration: 1,
									ease: 'none'
								  }
								);
							
								// Right side animation
								tl.fromTo(
								  rightSideRef.current, 
								  { 
									height: 0, 
									backgroundColor: borderColor 
								  }, 
								  { 
									height: '100%', 
									backgroundColor: borderColor,
									duration: 1,
									ease: 'none'
								  }
								);
							
								// Bottom side animation
								tl.fromTo(
								  bottomSideRef.current, 
								  { 
									width: 0, 
									backgroundColor: borderColor 
								  }, 
								  { 
									width: '100%', 
									backgroundColor: borderColor,
									duration: 1,
									ease: 'none'
								  }
								);
							
								// Left side animation
								tl.fromTo(
								  leftSideRef.current, 
								  { 
									height: 0, 
									backgroundColor: borderColor 
								  }, 
								  { 
									height: '100%', 
									backgroundColor: borderColor,
									duration: 1,
									ease: 'none'
								  }
								);
							
								return () => {
								  tl.kill();
								};
							  }, [borderColor]);
							return (
								<div
								ref={boxRef} 
									key={index}
									className="mr-4"
									style={{
										transform: `translateX(-${currentIndex * 416}px)`,
										transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
									}}
								>
									<CardComment
										webappName={each.webappName}
										description={each.description}
										sourceImage={each.sourceImage}
										listImageUrlOfPeople={each.listImageUrlOfPeople}
										haveStar={each.haveStar}
										numberpeopleLikes={each.numberpeopleLikes}
									/>
								</div>
							);
						})}
						<div className="bg-gradient-to-r from-transparent via-black/40 to-black/60 w-[100px] h-full right-0 absolute"></div>
					</div>

					<div className="mt-[2rem]">
						<div className="flex justify-end gap-3">
							<div className="w-[3rem] cursor-pointer h-[3rem] flex justify-center items-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm hover:from-primary/20 hover:to-primary/10 transition-all duration-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									className={`size-6 ${
										currentIndex === 0 ? "stroke-gray-600" : "stroke-emerald-400"
									} transition-colors duration-300 hover:stroke-emerald-300`}
									onClick={() => {
										if (currentIndex > 0) {
											setCurrentIndex(currentIndex - 1);
										}
									}}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
									/>
								</svg>
							</div>
							<div className="w-[3rem] cursor-pointer h-[3rem] flex justify-center items-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm hover:from-primary/20 hover:to-primary/10 transition-all duration-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									className={`size-6 ${
										currentIndex === maxIndex ? "stroke-gray-600" : "stroke-emerald-400"
									} transition-colors duration-300 hover:stroke-emerald-300`}
									onClick={() => {
										if (currentIndex < maxIndex) {
											setCurrentIndex(currentIndex + 1);
										}
									}}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</div>
						</div>
					</div>
				</FeatureContainers>
			</section>
			<section>
				<Container>
					<FeatureContainers props="pb-[3rem] md:pb-[5rem] relative">
						<div className="flex justify-between items-center py-2">
							<div className="flex">
								{svgCategories.map((each, index) => {
									return (
										<li
											key={index}
											className="flex items-center [&:not(:first-child)]:ml-3"
										>
											{each.svgElement}
											<span className="ml-2 text-white">{each.category}</span>
										</li>
									);
								})}
							</div>

							<form
								className="DocSearch-Form"
								action=""
								onSubmit={() => {
									console.log("send");
								}}
							>
								<div className="DocSearch-LoadingIndicator">
									<label className="flex border-b border-emerald-500/20 p-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill=""
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="white"
											className="size-6 mr-3 stroke-emerald-400"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
											/>
										</svg>
										<input
											className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
											placeholder="Search..."
										></input>
									</label>
								</div>
							</form>
						</div>
						<GroupLayOut></GroupLayOut>
					</FeatureContainers>
				</Container>
			</section>
			<section>
				<Container>
					<LastComponent
						contentforSpanPurpleGradient="The security first platform"
						HeaderText="Build your own integration"
						DescriptionText="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
						LinkText="Start building"
					></LastComponent>
				</Container>
			</section>
			
			
		</div>
	);
};

export default Integration;
