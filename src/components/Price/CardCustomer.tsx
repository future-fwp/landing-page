import React from "react";

function StarIcon({ isFilled }: { isFilled: boolean }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill=""
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke=""
			className={!isFilled ? "size-5 fill-white" : "size-5 fill-purple-600"}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
			/>
		</svg>
	);
}
const CardCustomer = ({
	imageUrl,
	Name,
	tagName,
	rating,
	comment,
}: {
	imageUrl: string;
	Name: string;
	tagName: string;
	rating: number;
	comment: string;
}) => {
	return (
		<div className="bg-gray-800 p-4 rounded-lg max-w-[20rem]">
			<div className="flex justify-between items-center mb-3">
				<div className="flex items-start">
					<img
						src={imageUrl}
						alt={Name}
						width={44}
						className="rounded-full mr-3"
					/>
					<div>
						<p className="text-gray-200">{Name}</p>
						<p className="text-gray-500">{tagName}</p>
					</div>
				</div>
				<div className="flex">
					<StarIcon isFilled={rating >= 1} />
					<StarIcon isFilled={rating >= 2} />
					<StarIcon isFilled={rating >= 3} />
					<StarIcon isFilled={rating >= 4} />
					<StarIcon isFilled={rating >= 5} />
				</div>
			</div>
			<div>
				<p className="text-gray-400 text-[0.875rem] leading-[1.5715] ">{comment}</p>
			</div>
		</div>
	);
};

export default CardCustomer;
