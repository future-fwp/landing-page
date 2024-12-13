import tw from "tailwind-styled-components";

interface CustomSpanGradientProps {
	content: string;
	addlayout?: string;
}

const CustomSpanPurpleGradient = ({ content, addlayout }: CustomSpanGradientProps) => {
	return (
		<span
			className={`inline-flex text-sm font-semibold py-1 px-3 
				bg-gradient-to-r from-primary/20 to-primary/10 
				rounded-full text-primary 
				backdrop-blur-sm border border-primary/10 
				hover:shadow-[0_0_10px_rgba(32,178,170,0.5)] 
				transition-all duration-25 ease-in-out 
				${addlayout || ""}`}
		>
			{content}
		</span>
	);
};

export default CustomSpanPurpleGradient;
