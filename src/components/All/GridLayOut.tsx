import React from "react";

type GridLayOutProps = {
	smallSpan: string;
	mediumSpan: string;
	largeSpan: string;
	gapElement: string;
	children: React.ReactNode; // Use ReactNode to accommodate multiple children
};

const GridLayOut: React.FC<GridLayOutProps> = ({ smallSpan, mediumSpan, largeSpan, gapElement, children }) => {
	return (
		<div
			className={`grid grid-cols-1 ${smallSpan} ${mediumSpan} ${largeSpan} 
				${gapElement}`}
		>
			{children}
		</div>
	);
};

export default GridLayOut;
