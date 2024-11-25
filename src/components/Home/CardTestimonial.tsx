
import CustomMedianHeading from "../All/CustomMedianHeading";
const CardTestimonial = ({
	imageUrl,
	altImage,

	content,
}: {
	imageUrl: string;
	altImage: string;

	content: string;
}) => {
	return (
		<>
			{/* Image */}
			<div className=" h-[128px] flex justify-center items-center">
				<div className="">
					<img
						src={imageUrl}
						alt={altImage}
						width={56}
						height={56}
						className="rounded-full"
					/>
				</div>
			</div>
			{/* Content */}
			<div className="text-center">
				<CustomMedianHeading
					content={content}
					addlayout="!text-[1.125rem] mb-[2.5rem] "
				></CustomMedianHeading>
			</div>
			{/* Name */}
		</>
	);
};

export default CardTestimonial;
