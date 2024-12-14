

interface CustomParagraphProps {
	content: string;
	customparagraphgrayprops?: string;
}

const CustomParagraphGrayText = ({ content, customparagraphgrayprops }: CustomParagraphProps) => {
	return (
		<p
			className={`text-base md:text-lg text-gray-400 leading-relaxed font-light tracking-wide ${
				customparagraphgrayprops || ""
			}`}
		>
			{content}
		</p>
	);
};

export default CustomParagraphGrayText;
