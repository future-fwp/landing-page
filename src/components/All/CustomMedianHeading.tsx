
import tw from "tailwind-styled-components";
interface addlayout {
	addlayout: string;
	custominsecondfeature?: boolean;
}
const MedianHeading = tw.h3<addlayout>`md:text-[2.25rem] md:leading-[1.277] md:tracking-[0.017em] text-[1.875rem] leading-[1.333] -tracking-[0.017em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 ${(
	props
) => {
	return props.addlayout;
}} ${(props) => {
	return props.custominsecondfeature ? "" : "";
}}`;
const CustomMedianHeading = ({
	content,
	addlayout,
	custominsecondfeature,
}: {
	content: string;
	addlayout: string;
	custominsecondfeature?: boolean;
}) => {
	return (
		<MedianHeading
			addlayout={addlayout}
			custominsecondfeature={custominsecondfeature}
		>
			{content}
		</MedianHeading>
	);
};

export default CustomMedianHeading;
