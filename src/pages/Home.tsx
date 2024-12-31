import React, { useState} from "react";
import Container from "../components/ComponentsForAll/Container";

import CustomLinkWithArrow from "../components/ComponentsForAll/CustomLinkWithArrow";

import CustomSpanGreenGradient from "../components/ComponentsForAll/CustomSpanGreenGradient";

import Pricing from "../components/Pricing";
import IllustrationCenter from "../components/ComponentsForAll/IllustrationCenter";

import FeatureContainers from "../components/ComponentsForAll/FeatureContainer";
import CardTestimonial from "../components/Home/CardTestimonial";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {gsap} from "gsap";
gsap.registerPlugin(ScrollTrigger);

import TriangleSVG from "../components/ComponentsForAll/TriangleSVG";
import { 
	// LastPagesComponent, 
	testimonials, 
	// cardDataInthisrdFeature, 
	featureforFourthComponent, 
	FeatureCard, 
	issueDetectionFeatures, 
	trustFeatures, 
	AdvanceFeature, 
	FeatureSecurity 
  } from "../utils/data.tsx";
import LastComponent from "../components/ComponentsForAll/LastComponent.tsx";
  
// Everything you need to know

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary/20 sm:text-4xl">
            Powerful Features for Your Landing Page
          </h2>
          <p className="mt-4 text-xl text-white">
            Everything you need to create a high-converting landing page
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{featureforFourthComponent.map((category, categoryIndex) => (
            <div key={categoryIndex} className="py-4 first:pt-0">
              <CustomSpanGreenGradient
                content={category.category}
                addlayout="mb-[2rem]"
              />
              <div className="grid gap-6">
                {category.features.map((feature, featureIndex) => (
                  <FeatureCard 
                    key={featureIndex}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    details={feature.details}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyTrustUsSection = () => {
  

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Why Trust Our Landing Page Solution?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've built a platform that combines cutting-edge technology, 
            user-centric design, and unparalleled performance to help you 
            create landing pages that convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-gray-700 group-hover:bg-opacity-80 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CustomLinkWithArrow
            content="Explore Our Features"
            primary={true}
            to="/features"
            addLayOut="inline-flex mx-auto"
          />
        </div>
      </div>
    </section>
  );
};



const SpotIssuesFasterSection = () => {
  

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            Spot Issues <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#f1f5f9]">Faster</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leverage cutting-edge AI and advanced analytics to detect, diagnose, 
            and resolve issues with unprecedented speed and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issueDetectionFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-gray-700 group-hover:bg-opacity-80 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2 text-gray-300 text-sm text-center">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-2 text-primary" 
                      fill="" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CustomLinkWithArrow
            content="Explore Issue Detection"
            primary={true}
            to="/features/issue-detection"
            addLayOut="inline-flex mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

const Home = () => {
	

	const gridRef = React.createRef<HTMLDivElement>();

	const [, setPosition] = useState({ x: 0, y: 0 }); // position glow mousepointer event ;;


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



	// GSAP Animation Setup
	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Add data attributes to elements you want to animate
		const apiSecuritySection = document.querySelector('.scrollTrigger-section');
		
		if (apiSecuritySection) {
			// Add data attributes to text elements
			const heroTitle = apiSecuritySection.querySelector('h1');
			const heroSubtitle = apiSecuritySection.querySelector('p');
			const heroLink = apiSecuritySection.querySelector('a');

			if (heroTitle) heroTitle.setAttribute('data-animation-text', 'true');
			if (heroSubtitle) heroSubtitle.setAttribute('data-animation-text', 'true');
			if (heroLink) heroLink.setAttribute('data-animation-text', 'true');

			// Create a glow element
			const glowElement = document.createElement('div');
			// glowElement.classList.add('absolute', 'bottom-0', 'left-1/2', 'transform', '-translate-x-1/2', 'w-64', 'h-64', 'bg-blue-500', 'rounded-full', 'opacity-30', 'blur-3xl');
			glowElement.setAttribute('data-animation-glow', 'true');
			apiSecuritySection.appendChild(glowElement);

			const textElements = apiSecuritySection.querySelectorAll('[data-animation-text]');
			const glowElementQuery = apiSecuritySection.querySelector('[data-animation-glow]');

			console.log('Text Elements:', textElements);
			console.log('Glow Element:', glowElementQuery);

			// Text Animation
			gsap.fromTo(textElements, 
				{ 
					opacity: 0, 
					y: 50,
					scale: 0.9 
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1,
					stagger: 0.3,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: apiSecuritySection,
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Glow Animation
			if (glowElementQuery) {
				gsap.fromTo(glowElementQuery,
					{
						opacity: 0,
						scale: 0.5,
						y: 100
					},
					{
						opacity: 0.3,
						scale: 1,
						y: 0,
						duration: 1.5,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: apiSecuritySection,
							toggleActions: 'play none none reverse'
						}
					}
				);
			}
		} else {
			console.error('API Security Section not found');
		}
	}, []);


	// Slide up animation for "smarter and faster" sections
	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Find all sections with "smarter and faster" text
		const smarterFasterSections = document.querySelectorAll('section');
		
		smarterFasterSections.forEach((section) => {
			// Check if section contains "smarter and faster" text
			const containsSmarterFaster = section.textContent?.toLowerCase().includes('Faster.Smarter.');
			
			if (containsSmarterFaster) {
				// Select all direct children elements to animate
				const elementsToAnimate = section.querySelectorAll('h1, h2, h3, p, div, span, a');
				
				gsap.fromTo(elementsToAnimate, 
					{ 
						opacity: 0, 
						y: 50,
						scale: 0.95
					},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 1,
						stagger: 0.2,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: section,
							start: 'top bottom',
							end: 'bottom top',
							scrub: true,
							toggleActions: 'play none none reverse'
						}
					}
				);
			}
		});
	}, []);


	React.useEffect(() => {
        // Animate feature sections on scroll
        gsap.utils.toArray('.feature-section').forEach((section: any) => {
            gsap.fromTo(section, 
                { 
                    opacity: 0, 
                    y: 100,
                    scale: 0.9 
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

		// clear explain: make animation to appear element with duration 

        // Parallax effect for illustrations
        gsap.utils.toArray('.parallax-layer').forEach((layer: any) => {
            gsap.to(layer, {
                y: (_, el) => -ScrollTrigger.maxScroll(window) * el.dataset.speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: layer,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    }, []);

	// Effect for adding and cleaning up event listener
	React.useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// React.useEffect(() => {
	// 	window.addEventListener("mousemove", handleMouseMoveSecondFeature);
	// 	return () => {
	// 		window.removeEventListener("mousemove", handleMouseMoveSecondFeature);
	// 	};
	// }, []);

	// const [currentIndex, setCurrentIndex] = useState(0);

	const [currentNameIndexForTestimonial, setcurrentNameIndexForTestimonial] = useState(0);

	return (
		<>
			<main className="relative">
				{/* Home Page */}
				<section className="relative scrollTrigger-section">
					<Container>
					<div className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl max-md:text-center  tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Create Stunning</span>{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-white xl:inline">Landing Pages</span>
            </h1>
            <p className="mt-3  text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
              Transform your online presence with our powerful, intuitive landing page builder. 
              Design, customize, and launch professional websites in minutes.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#features"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#demo"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white md:py-4 md:text-lg md:px-10"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 flex items-center justify-center">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img 
                className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                src="/path/to/landing-page-mockup.png" 
                alt="Landing Page Mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
					</Container>
					
				</section>

				{/* Swiper  */}

				{/* First Features */}
				
				{/* Second Feature */}
				<section>
					<Container>
						<FeatureContainers props="md:pt-[8rem]  pt-[4rem] ">
							
							<FeaturesSection />
						</FeatureContainers>
					</Container>
				</section>
				<section>
					<Container>
						{/* Second Feature */}
						<IllustrationCenter
							position="top-0"
							children={
								<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1404" height="658">
									<defs>
										<path id="a" d="M0 0h2324v658H0z"/><path id="b" d="M0 0h2324v658H0z"/>
										<radialGradient id="c" cx="50%" cy="0%" r="106.751%" fx="50%" fy="0%" gradientTransform="matrix(0 1 -.28313 0 .5 -.5)">
											<stop offset="0%" stop-color="#4ADE80"/>
											<stop offset="22.35%" stop-color="#22C55E" stop-opacity=".64"/>
											<stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
											</radialGradient>
											<linearGradient id="d" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
												<stop offset="0%" stop-color="#FFF"/>
												<stop offset="100%" stop-color="#FFF" stop-opacity="0"/>
												</linearGradient>
												<filter id="e" width="165.1%" height="170.3%" x="-32.5%" y="-35.1%" filterUnits="objectBoundingBox">
													<feGaussianBlur in="SourceGraphic" stdDeviation="50"/>
													</filter>
													</defs>
													<g fill="none" fill-rule="evenodd" transform="translate(-460)"><mask id="f" fill="#fff">
														<use xlinkHref="#b"/>
														</mask>
														<use xlinkHref="#b" fill="url(#c)"/>
														<path fill="url(#d)" d="m629-216 461 369-284 58z" filter="url(#e)" mask="url(#f)"/>
														</g></svg>
							}
						></IllustrationCenter>
						<section className=" py-16 md:py-20">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
								{/* Content Column */}
								<div className="lg:order-1 order-2 space-y-8">
									<div className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-primary">
										<span className="text-sm font-medium">
											Advanced Authentication
										</span>
									</div>
									
									<h2 className="text-4xl md:text-5xl font-extrabold text-white">
									Beyond a Simple
										<p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
										Login Box
										</p>
									</h2>
									
									<p className="text-xl text-white/60 max-w-xl">
										Elevate your user authentication with an intelligent, secure, and user-friendly login experience that goes beyond traditional security measures.
									</p>
									
									<div className="space-y-6">
										{AdvanceFeature.map((feature, index:number) => (
											<div 
												key={index} 
												className="flex items-center space-x-6 bg-gray-800 p-6 rounded-xl hover:shadow-md transition-all duration-300"
											>
												<div className="flex-shrink-0">{feature.icon}</div>
												<div>
													<h3 className="text-xl font-semibold text-white mb-2">
														{feature.title}
													</h3>
													<p className="text-white">
														{feature.description}
													</p>
												</div>
											</div>
										))}
									</div>
									
									<div className="flex space-x-4">
										<CustomLinkWithArrow
											content="Learn More"
											primary={true}
											to="/features/authentication"
											addLayOut="inline-flex items-center"
										></CustomLinkWithArrow>
									</div>
								</div>
								
								{/* Illustration Column */}
								
							</div>
						</div>
					</section>
					</Container>
				</section>
				
				<section>
					<Container>
						{/* Fourth Feature */}
						<IllustrationCenter
							children={
								<TriangleSVG/>
							}
							position="top-0 !left-[200px] min-[1152px]:!left-[calc((100vw-1152px)/2+200px)]" // custom position of left
						></IllustrationCenter>
						<FeatureContainers props="pt-[4rem] md:pt-[3rem]">
							

							<WhyTrustUsSection/>

							{featureforFourthComponent.map((category, categoryIndex) => (
            <div key={categoryIndex} className="py-4 first:pt-0">
              <CustomSpanGreenGradient
                content={category.category}
                addlayout="mb-[2rem]"
              />
              <div className="grid md:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <FeatureCard 
                    key={featureIndex}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    details={feature.details}
                  />
                ))}
              </div>
            </div>
          ))}
						</FeatureContainers>
					</Container>
				</section>
				<section>
					<Container>
						{/* Authentication Services */}
						<FeatureContainers props="md:pt-[8rem] pt-[4rem] md:pb-[5rem] pb-[3rem] bg-gradient-to-br from-black to-zinc-900">
							<div className="max-w-7xl mx-auto">
								<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
									{/* Content Column */}
									<div className="lg:order-1 order-2">
										<div className="space-y-6">
											<div className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-primary">
												<span className="text-sm font-medium">
													Authentication Reimagined
												</span>
											</div>
											
											<h2 className="text-4xl font-extrabold text-primary sm:text-5xl lg:text-6xl">
												Secure Your 
												<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white ml-3">
													Digital Identity
												</span>
											</h2>
											
											<p className="mt-4 text-xl text-white">
												Revolutionize your security infrastructure with our intelligent authentication ecosystem. Protect, verify, and empower your users with seamless, advanced protection.
											</p>
											
											<div className="mt-8 space-y-4">
												{FeatureSecurity.map((feature, index) => (
													<div key={index} className="flex items-start space-x-4 bg-gray-800 text-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
														<div className="flex-shrink-0">{feature.icon}</div>
														<div>
															<h3 className="text-lg font-semibold ">{feature.text}</h3>
															<p className="text-sm">{feature.description}</p>
														</div>
													</div>
												))}
											</div>
											
											<div className="mt-10 flex space-x-4">
												<CustomLinkWithArrow
													content="Explore Authentication"
													primary={true}
													to="/features/authentication"
													addLayOut="inline-flex items-center"
												></CustomLinkWithArrow>
												<a 
													href="#demo" 
													className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-white transition-colors"
												>
													Watch Demo
													<svg 
														xmlns="http://www.w3.org/2000/svg" 
														className="h-5 w-5 ml-2" 
														viewBox="0 0 20 20" 
														fill="currentColor"
													>
														<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
													</svg>
												</a>
											</div>
										</div>
									</div>
									
									{/* Illustration Column */}
									<div className="lg:order-2 order-1 mt-12 lg:mt-0">
										<div className="relative">
											<div className="bg-gradient-to-br from-primary to-white rounded-3xl p-8 transform transition-transform duration-500 hover:scale-105">
												<div className="aspect-w-16 aspect-h-10 overflow-hidden rounded-2xl shadow-2xl">
													<img 
														src="https://via.placeholder.com/150?auth-token=abcd1234" 
														alt="Authentication Services" 
														className="w-full h-full object-cover"
													/>
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</FeatureContainers>
					</Container>
				</section>
				<section>
					<Container>
						{/* Fifth Feature */}
						{/*  */}
						<SpotIssuesFasterSection />
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
            id="seagreen-gradient"  // Changed to a more descriptive ID
            x1="19.609%"
            x2="50%"
            y1="14.544%"
            y2="100%"
        >
            <stop
                offset="0%"
                stop-color="#20B2AA"  // Base Light Sea Green
            ></stop>
            <stop
                offset="100%"
                stop-color="#20B2AA"  // Same color, but with transparency
                stop-opacity="0"
            ></stop>
        </linearGradient>
    </defs>
    <path
        fill="url(#seagreen-gradient)"  // Updated to match new ID
        fill-rule="evenodd"
        d="m661 736 461 369-284 58z"
        transform="matrix(1 0 0 -1 -661 1163)"
    ></path>
</svg>
							}
							position="left-1/2 bottom-0"
						/>
					</Container>
				</section>
				<section>
					<div className="md:px-6 px-4 mx-auto bg-black  ">
						<FeatureContainers props="md:pb-[5rem] pb-[3rem] ">
							{testimonials.map((each) => {
								return (
									<>
										{currentNameIndexForTestimonial === testimonials.indexOf(each) && (
											<CardTestimonial
												imageUrl={each.imageUrl}
												content={each.content}
												altImage={each.altName}
											></CardTestimonial>
										)}
									</>
								);
							})}
							<div className="flex  max-md:max-w-[300px] mx-auto flex-col md:flex-row justify-center ">
								{testimonials.map((each) => {
									return (
										<button
											key={each.altName}
											className={`${
												currentNameIndexForTestimonial === testimonials.indexOf(each)
													? "border text-white "
													: "border-gray-400 border text-gray-400"
											} px-3 py-1.5 m-1.5 text-[0.875rem] rounded-full`}
											onClick={() => {
												setcurrentNameIndexForTestimonial(testimonials.indexOf(each));
											}}
										>
											{each.altName} {each.position}
										</button>
									);
								})}
							</div>
						</FeatureContainers>
					</div>
				</section>
				
							<LastComponent contentforSpanPurpleGradient="Get started" HeaderText="Ready to start your journey?" DescriptionText="Sign up for our product and take your business to the next level." LinkText="Get Started" />
			</main>
		</>
	);
};

export default Home;
