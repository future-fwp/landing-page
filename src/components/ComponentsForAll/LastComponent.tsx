import FeatureContainers from "./FeatureContainer";
import Container from "./Container";
import IllustrationCenter from "./IllustrationCenter";
import CustomSpanGreenGradient from "./CustomSpanGreenGradient";
import CustomSubtitle from "./CustomSubtitle";
import CustomParagraphGrayText from "./CustomParagraph";
import CustomLinkWithArrow from "./CustomLinkWithArrow";
import TriangleSVG from "./TriangleSVG";
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
							<div className="bg-primary w-[300px] h-[150px] blur-3xl rounded-b-full flex justify-center ">
								<div className="bg-primary w-[80px] h-[40px] rounded-b-full"></div>
							</div>
						}
						position="top-0 left-1/2"
					></IllustrationCenter>
					<IllustrationCenter
						children={
							<TriangleSVG/>
						}
						position="translate-y-[30%] left-[400px] "
					></IllustrationCenter>
					<div className="flex flex-col items-center justify-center">
						<div className="">
							<CustomSpanGreenGradient
								content={contentforSpanPurpleGradient}
								addlayout="pb-3 "
							></CustomSpanGreenGradient>
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
