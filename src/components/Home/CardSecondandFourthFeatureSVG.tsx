import React, { ReactElement } from "react";

const CardSecondandFourthFeatureSVG = ({
	svgElement,
	title,
	description,
}: {
	svgElement: ReactElement;
	title: string;
	description: string;
}) => {
	return (
		<div>
			<div className="flex fill-white items-center mb-1">
				{svgElement}
				<h4 className="text-gray-200 text-[0.875rem] ml-2">{title}</h4>
			</div>
			<div className="text-gray-500">{description}</div>
		</div>
	);
};

export default CardSecondandFourthFeatureSVG;
