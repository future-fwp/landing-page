import tw from "tailwind-styled-components";

interface LinkCustomProps {
	$primary: boolean;
	addLayOut?: string;
	customforpricecomponent: boolean;
}

const CustomLink = tw.a<LinkCustomProps>`
  inline-flex items-center rounded-full
  ${(p) =>
		p.$primary
			? p.customforpricecomponent
				? "bg-primary text-white px-4 py-1.5"
				: "bg-gradient-to-r from-gray-200 via-white to-gray-200 px-4 py-1.5"
			: "px-3 py-1 bg-black text-white"}
  ${(p) => p.addLayOut || ""}
`;

const CustomLinkWithArrow = ({
	content,
	primary,
	to,
	addLayOut,
	customforpricecomponent = false,
}: {
	content: string;
	primary: boolean;
	to: string;
	addLayOut?: string;
	customforpricecomponent?: boolean;
}) => {
	return (
		<CustomLink
			href={to}
			$primary={primary}
			addLayOut={addLayOut}
			customforpricecomponent={customforpricecomponent}
		>
			{content}{" "}
			{
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					className={`size-4 ml-1 ${customforpricecomponent ? "stroke-white" : "stroke-primary"}`}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
					/>
				</svg>
			}
		</CustomLink>
	);
};

export default CustomLinkWithArrow;
