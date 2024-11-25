
import tw from "tailwind-styled-components";
interface addlayout {
	addlayout: string;
}
const SpanPurpleGradient = tw.span<addlayout>`text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#CBD5E1] ${(
	p
) => {
	return p.addlayout;
}}`;

const CustomSpanPurpleGradient = ({ content, addlayout }: { content: string; addlayout: string }) => {
	return (
		<div className="inline-flex">
			<SpanPurpleGradient addlayout={addlayout}>{content}</SpanPurpleGradient>
		</div>
	);
};

export default CustomSpanPurpleGradient;
