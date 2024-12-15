
import CustomMedianHeading from "../ComponentsForAll/CustomMedianHeading";
import { useEffect, useRef } from "react";
import {gsap} from "gsap";
const CardTestimonial = ({
	imageUrl,
	altImage,

	content,
}: {
	imageUrl: string;
	altImage: string;

	content: string;
}) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);


	useEffect(() => {
		if (cardRef.current && imageRef.current && contentRef.current) {
			const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
			
			tl.fromTo(
				imageRef.current, 
				{ opacity: 0, scale: 0.5, y: 50 }, 
				{ opacity: 1, scale: 1, y: 0, duration: 0.8 }
			)
			.fromTo(
				contentRef.current, 
				{ opacity: 0, y: 50 }, 
				{ opacity: 1, y: 0, duration: 0.8 },
				'-=0.4'
			);
		}
	}, []);

	return (
		<>
			{/* Image */}
			<div ref = {cardRef} className=" h-[128px] flex justify-center items-center">
				<div className="">
					<img
					ref= {imageRef}
						src={imageUrl}
						alt={altImage}
						width={56}
						height={56}
						className="rounded-full"
					/>
				</div>
			</div>
			{/* Content */}
			<div className="text-center" ref = {contentRef
			}>
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
