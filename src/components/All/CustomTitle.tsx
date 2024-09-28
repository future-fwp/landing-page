import tw from "tailwind-styled-components";
interface ClassProps {
	addlayout: string;
}
const Title = tw.h1<ClassProps>`md:text-[3.5rem] md:leading-[1] font-extrabold  -tracking-[0.017em] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-[2.75rem] leading-[1.1] ${(
	p
) => {
	return p.addlayout;
}}`;
const CustomTitle = ({ content, addlayout }: { content: string; addlayout: string }) => {
	return <Title addlayout={addlayout}>{content}</Title>;
};

export default CustomTitle;
