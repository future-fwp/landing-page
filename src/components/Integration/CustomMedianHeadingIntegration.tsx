import React from "react";
import CardComment from "./CardComment";
const CustomMedianHeadingIntegration = ({ content, addLayOut }: { content: string; addLayOut: string }) => {
	return (
		<div>
			<h3
				className={`${addLayOut} text-[1.5rem] leading-[1.415] -tracking-[0.017em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400`}
			>
				{content}
			</h3>
		</div>
	);
};

export default CustomMedianHeadingIntegration;
