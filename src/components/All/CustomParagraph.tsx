import React from "react";
import tw from "tailwind-styled-components";

interface customparagraphgrayprops {
	customparagraphgrayprops: string;
}

const Paragraph = tw.p<customparagraphgrayprops>`inline-flex text-gray-400 text-[1.125rem] leading-[1.5] -tracking-[0.017em] ${(
	p
) => {
	return p.customparagraphgrayprops;
}} `;
const CustomParagraphGrayText = ({
	customparagraphgrayprops,
	content,
	custominsecondfeature,
}: {
	customparagraphgrayprops: string;
	content: string;
	custominsecondfeature?: boolean;
	customincardcomponent?: boolean;
}) => {
	return <Paragraph customparagraphgrayprops={customparagraphgrayprops}>{content}</Paragraph>;
};

export default CustomParagraphGrayText;
