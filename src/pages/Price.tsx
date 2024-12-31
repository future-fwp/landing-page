import Pricing from "../components/Pricing";
import Container from "../components/ComponentsForAll/Container";
import CustomHeroHeader from "../components/ComponentsForAll/CustomHeroHeader";
import FeatureContainers from "../components/ComponentsForAll/FeatureContainer";
import CustomSpanGreenGradient from "../components/ComponentsForAll/CustomSpanGreenGradient";
import IllustrationCenter from "../components/ComponentsForAll/IllustrationCenter";
import CustomSubtitle from "../components/ComponentsForAll/CustomSubtitle";
import React from "react";
import CardCustomer from "../components/Price/CardCustomer";

import CardFaq from "../components/Price/CardFaq";

import LastComponent from "../components/ComponentsForAll/LastComponent";

import {faqs, firstColumnCustomers, secondColumnCustomers, thirdColumnCustomers} from "../utils/data";

const Price = () => {
	return (
		<main>
			<section className="relative">
				<Container>
					
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
													stop-color="23A78F"
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
						<div className="bg-primary w-[400px] h-[200px] blur-3xl rounded-b-full flex justify-center ">
							<div className="bg-primary w-[80px] h-[40px] rounded-b-full"></div>
						</div>
					}
					position="top-0"
				/>
			</section>
			<section className="relative">
				
			</section>
			<section className="relative overflow-hidden">
      <Container>
        <FeatureContainers props="md:py-[5rem] py-[3rem]">
          <div className="max-lg:mx-auto max-lg:max-w-[40rem]">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* First Column - Sliding Up */}
              <div className="h-[600px] overflow-hidden relative">
                <div className="animate-slide-up absolute w-full">
                  {/* Duplicate array for seamless loop */}
                  {[...firstColumnCustomers, ...firstColumnCustomers, ...firstColumnCustomers].map((customer, index) => (
                    <div key={`col1-${index}`} className="my-3">
                      <CardCustomer
                        Name={customer.name}
                        tagName={customer.tagName}
                        imageUrl={customer.imageUrl}
                        rating={customer.rating}
                        comment={customer.comment}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Column - Sliding Down */}
              <div className="h-[600px] overflow-hidden relative">
                <div className="animate-slide-down absolute w-full">
                  {[...secondColumnCustomers, ...secondColumnCustomers, ...secondColumnCustomers].map((customer, index) => (
                    <div key={`col2-${index}`} className="my-3">
                      <CardCustomer
                        Name={customer.name}
                        tagName={customer.tagName}
                        imageUrl={customer.imageUrl}
                        rating={customer.rating}
                        comment={customer.comment}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Third Column - Sliding Up */}
              <div className="h-[600px] max-lg:hidden overflow-hidden relative">
                <div className="animate-slide-up absolute w-full">
                  {[...thirdColumnCustomers, ...thirdColumnCustomers, ...thirdColumnCustomers].map((customer, index) => (
                    <div key={`col3-${index}`} className="my-3">
                      <CardCustomer
                        Name={customer.name}
                        tagName={customer.tagName}
                        imageUrl={customer.imageUrl}
                        rating={customer.rating}
                        comment={customer.comment}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FeatureContainers>
      </Container>
      
      <IllustrationCenter
        children={
          <div className="bg-primary w-[300px] h-[150px] blur-3xl rounded-b-full flex justify-center">
            <div className="bg-primary w-[80px] h-[40px] rounded-b-full"></div>
          </div>
        }
        position="top-0 left-1/2"
      />

      
    </section>

			<section>
				<Container>
					<FeatureContainers props="md:py-[5rem] py-[3rem]">
						<CustomHeroHeader
							CustomTitle={
								<CustomSubtitle
									content="The essentials to master"
									addlayout="pb-[1rem] "
								/>
							}
							CustomSpanGreenGradient={
								<CustomSpanGreenGradient
									content="Getting started with Stellar"
									addlayout="pb-[0.75rem]"
								></CustomSpanGreenGradient>
							}
						></CustomHeroHeader>
						<div className="grid md:grid-cols-3 sm:grid-cols-2">
							{faqs.map((each, index) => {
								const [isShow, setIsShow] = React.useState(false);
								return(<div
									key={index}
									className="flex border p-2 md:min-w-[calc(50%_-_1rem)]"
								>
								
									 <CardFaq {...each} isVisible = {isShow} />
									<svg onClick = {() => {
										setIsShow(!isShow)
									}}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`text-white size-8 transition-transform duration-1000 ${
										isShow ? "rotate-90" : "rotate-0"
									}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
								</div>)
})}
						</div>
					</FeatureContainers>
				</Container>
			</section>
			<LastComponent
				contentforSpanPurpleGradient="The best security platform"
				HeaderText="Create Your Custom Integration"
				DescriptionText="Most tools rely on repetitive templates, but ours stands out by providing a truly unique and seamless integration experience."
				LinkText="Get started"
			></LastComponent>
		</main>
	);
};

export default Price;
