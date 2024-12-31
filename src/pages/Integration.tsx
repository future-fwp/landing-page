import { useState, useRef, useEffect } from "react";
import Container from "../components/ComponentsForAll/Container";
import FeatureContainers from "../components/ComponentsForAll/FeatureContainer";
import CustomSpanGreenGradient from "../components/ComponentsForAll/CustomSpanGreenGradient";
import CustomTitle from "../components/ComponentsForAll/CustomTitle";
import IllustrationCenter from "../components/ComponentsForAll/IllustrationCenter";
import CustomParagraphGrayText from "../components/ComponentsForAll/CustomParagraph";
import CustomHeroHeader from "../components/ComponentsForAll/CustomHeroHeader";

import gsap from "gsap";
import { cardData, updatedCards } from "../utils/data";
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
							src=""
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
									content="Create a Landing Page That Reflects Your Brand"
								></CustomTitle>
							}
							CustomParagraphText={
								<CustomParagraphGrayText
									customparagraphgrayprops="max-w-[48rem] mx-auto "
									content="Our customizable template adapts seamlessly across all devices, delivering exceptional performance and stunning visuals every time."
								></CustomParagraphGrayText>
							}
							CustomSpanGreenGradient={
								<CustomSpanGreenGradient
									
									content="Extensions & Plugins"
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
						{cardData.map((each, index) => {
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
							<div className=" cursor-pointer ">
								<button className={`text-white px-3 py-2 flex justify-center items-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm hover:from-primary/20 hover:to-primary/10 transition-all duration-300 ${currentIndex === 0 ? "cursor-not-allowed":""}`} onClick={() => {
										if (currentIndex > 0) {
											setCurrentIndex(currentIndex - 1);
										}

									}}>Previous</button>
							</div>
							<div className="cursor-pointet">
								<button className={`text-white px-3 py-2 flex justify-center items-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm hover:from-primary/20 hover:to-primary/10 transition-all duration-300 ${currentIndex === updatedCards.length-1 ? "cursor-not-allowed":""}`} onClick={() => {
										if (currentIndex < maxIndex) {
											setCurrentIndex(currentIndex + 1);
										}
									}}>
								Next
							</button>
							</div>
							
						</div>
					</div>
				</FeatureContainers>
			</section>
			
			<section>
				<Container>
					<LastComponent
						contentforSpanPurpleGradient="The security first platform"
						HeaderText="Create Your Custom Integration"
						DescriptionText="Most tools rely on repetitive templates, but ours stands out by providing a truly unique and seamless integration experience."
						LinkText="Get started"
					></LastComponent>
				</Container>
			</section>
			
			
		</div>
	);
};

export default Integration;
