import React from "react";
import tw from "tailwind-styled-components";
import CustomParagraphGrayText from "../All/CustomParagraph";
import CustomLinkWithArrow from "../All/CustomLinkWithArrow";
const CardWrapper = tw.div`p-6 min-w-[340px] border border-gray-600 mr-[1.5rem] rounded-lg relative`;
const CardThirdFeature = ({
	sourceImage,
	altImage,
	title,
	description,
	link,
	currentGradient,
}: {
	sourceImage: string;
	altImage: string;
	title: string;
	description: string;
	link: string;
	currentGradient: boolean;
}) => {
	return (
		<CardWrapper>
			<div className="mb-3">
				<img
					src={sourceImage}
					alt={altImage}
				/>
			</div>
			<div>
				<CustomParagraphGrayText
					customparagraphgrayprops="!text-[#f1f5f9] mb-1"
					content={title}
				/>
				<p className="text-[#94A3B8]">{description}</p>
			</div>
			<div className="flex justify-end *:bg-transparent">
				<CustomLinkWithArrow
					to={link}
					primary={false}
					content="Learn more"
				></CustomLinkWithArrow>
			</div>
			{currentGradient && (
				<div className="absolute bottom-0 left-[calc(50%-100px)] bg-purple-600 -z-10 w-[200px] h-[100px] rounded-t-full blur-3xl"></div>
			)}
		</CardWrapper>
	);
};

export default CardThirdFeature;
