import React from "react";

interface FeatureContainersProps {
	children: React.ReactNode;
	props?: string;
}

const FeatureContainers = ({ children, props }: FeatureContainersProps) => {
	return (
		<div
			className={`w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto max-w-7xl bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm 
				hover:shadow-[0_0_20px_rgba(32,178,170,0.5)] transition-shadow duration-300 ease-in-out 
				${props || ""}`}
		>
			{children}
		</div>
	);
};

export default FeatureContainers;
