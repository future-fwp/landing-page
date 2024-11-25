import { ReactElement } from "react";
import tw from "tailwind-styled-components";
interface addlayout {
	addlayout?: string;
}
const ContainerHeroHeader = tw.div<addlayout>`max-w-[48rem] mx-auto md:pb-[5rem] pb-[3rem] text-center ${(p) => {
	return p.addlayout;
}}`;
const CustomHeroHeader = ({
	CustomTitle,
	CustomParagraphText,
	CustomSpanPurpleGradient,
	addlayout,
}: {
	CustomTitle: ReactElement;
	addlayout?: string;

	CustomParagraphText?: ReactElement;
	CustomSpanPurpleGradient?: ReactElement;
}) => {
	return (
		<ContainerHeroHeader addlayout={addlayout}>
			{CustomSpanPurpleGradient}
			{CustomTitle}
			{CustomParagraphText}
		</ContainerHeroHeader>
	);
};

export default CustomHeroHeader;
