import React from "react";

const GlowGradient = () => {
	return (
		<div className="text-white absolute -bottom-[calc(200px)] left-[calc(50vw-200px)]">
			<div className="flex-1"></div>
			<div className="bg-gradient-to-r from-purple-500/60 to-purple-500/60 -z-20 w-[400px] h-[400px] flex items-center justify-center rounded-full blur-3xl">
				<div
					className="bg-purple-500/100 w-32 h-32 rounded-full filter-none backdrop-filter-none blur-none "
					style={{ filter: "blur(0px)" }}
				></div>
			</div>
			<div className="flex-1"></div>
		</div>
	);
};

export default GlowGradient;
