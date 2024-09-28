import React, { ReactElement } from "react";
import tw from "tailwind-styled-components";
interface ActiveClickProps {
	activeClick: boolean;
}

interface CardFirstFeatureProps {
	activeClick: boolean;
	svgElement: ReactElement;
	content: string;
	setCards: React.Dispatch<
		React.SetStateAction<{ activeClick: boolean; svgElement: ReactElement; content: string }[]>
	>;
	index: number;
}

const CardElement = tw.div<ActiveClickProps>`px-3 py-2 flex items-center rounded-md [&:not(:first-child)]:mt-[0.5rem]  ${(
	p
) => {
	return p.activeClick
		? "text-white border-purple-600 border-[2px] fill-white"
		: "border hover:border-white border-gray-600 fill-gray-600 hover:fill-white hover:text-white text-gray-600";
}}`;

const CardFirstFeature: React.FC<CardFirstFeatureProps> = ({ activeClick, svgElement, content, setCards, index }) => {
	return (
		<CardElement
			activeClick={activeClick}
			onClick={() => {
				setCards((prevCards) =>
					prevCards.map((card, i) => ({
						...card,
						activeClick: i === index,
					}))
				);
			}}
		>
			{svgElement}
			<span>{content}</span>
		</CardElement>
	);
};

export default CardFirstFeature;
