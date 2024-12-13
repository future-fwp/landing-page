import tw from "tailwind-styled-components";

interface CustomTitleProps {
	content: string;
	addlayout?: string;
}

const CustomTitle = ({ content, addlayout }: CustomTitleProps) => {
	return (
		<h2
			className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${addlayout}`}
		>
			{content}
		</h2>
	);
};

export default CustomTitle;
