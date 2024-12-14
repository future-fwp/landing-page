import React from "react";

interface ContainerProps {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return (
		<div className="relative w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[90rem] overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 pointer-events-none" />
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default Container;
