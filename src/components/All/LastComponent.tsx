import FeatureContainers from "./FeatureContainer";
import Container from "./Container";
import IllustrationCenter from "./IllustrationCenter";
import CustomSpanPurpleGradient from "./CustomSpanPurpleGradient";
import CustomSubtitle from "./CustomSubtitle";
import CustomParagraphGrayText from "./CustomParagraph";
import CustomLinkWithArrow from "./CustomLinkWithArrow";
const LastComponent = ({
	contentforSpanPurpleGradient,
	HeaderText,
	DescriptionText,
	LinkText,
}: {
	contentforSpanPurpleGradient: string;
	HeaderText: string;
	DescriptionText: string;
	LinkText: string;
}) => {
	return (
		<section>
			<Container>
				<FeatureContainers props="md:py-[5rem] py-[3rem] px-[2rem] relative">
					<IllustrationCenter
						children={
							<div className="bg-purple-700 w-[300px] h-[150px] blur-3xl rounded-b-full flex justify-center ">
								<div className="bg-purple-500 w-[80px] h-[40px] rounded-b-full"></div>
							</div>
						}
						position="top-0 left-1/2"
					></IllustrationCenter>
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
									d="m0 0 461 369-284 58z"
									transform="matrix(1 0 0 -1 0 427)"
								></path>
							</svg>
						}
						position="translate-y-[30%] left-[400px] "
					></IllustrationCenter>
					<div className="flex flex-col items-center justify-center">
						<div className="">
							<CustomSpanPurpleGradient
								content={contentforSpanPurpleGradient}
								addlayout="pb-3 "
							></CustomSpanPurpleGradient>
						</div>
						<div>
							<CustomSubtitle
								content={HeaderText}
								addlayout="pb-[1rem] "
							></CustomSubtitle>
						</div>
						<div>
							<CustomParagraphGrayText
								content={DescriptionText}
								customparagraphgrayprops="mb-[2rem] text-center"
							></CustomParagraphGrayText>
						</div>

						<div>
							<CustomLinkWithArrow
								content={LinkText}
								primary={true}
								to="/"
							></CustomLinkWithArrow>
						</div>
					</div>
				</FeatureContainers>
			</Container>
		</section>
	);
};

export default LastComponent;
