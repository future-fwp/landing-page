import React from "react";

const CardVariation = ({ keyText, feature, lastKey }: { keyText: string; feature: string; lastKey?: string }) => {
	return (
		<div className="p-4 bg-gray-800 rounded-2xl flex items-center">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					className="mr-4"
				>
					<path
						className="fill-purple-600"
						fill-opacity=".24"
						d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z"
					></path>
					<path
						className="fill-pink-500"
						fill-rule="nonzero"
						d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z"
					></path>
				</svg>
			</div>

			<p className="text-gray-400 font-normal text-[0.875rem] leading-[1.5715] ">
				{keyText} <strong className="text-white"> {feature}</strong> {lastKey}
			</p>
		</div>
	);
};

export default CardVariation;
