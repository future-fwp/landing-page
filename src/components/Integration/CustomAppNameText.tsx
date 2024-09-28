import React from "react";
import { Link } from "react-router-dom";

const CustomAppNameText = ({ content, path }: { content: string; path: string }) => {
	return (
		<div className="">
			<Link
				to={path}
				className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 font-semibold  leading-[1.5715] "
			>
				{content}
			</Link>
		</div>
	);
};

export default CustomAppNameText;
