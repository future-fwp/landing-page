
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


const CustomTextDescriptionCard = ({ content }: { content: string }) => {
	return <div className="text-[0.85rem] leading-[1.5715] text-gray-400">{content}</div>;
};


import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const CardComment = ({
	webappName,
	description,
	listImageUrlOfPeople = [],
	numberpeopleLikes = "0",
	sourceImage,
	haveStar,
}: {
	webappName: string;
	description: string;
	listImageUrlOfPeople?: string[];
	numberpeopleLikes?: string;
	sourceImage: string;
	haveStar: boolean;
}) => {
	const cardRef = useRef<HTMLDivElement>(null);
    const borderTopRef = useRef<HTMLSpanElement>(null);
    const borderRightRef = useRef<HTMLSpanElement>(null);
    const borderBottomRef = useRef<HTMLSpanElement>(null);
    const borderLeftRef = useRef<HTMLSpanElement>(null);



    useEffect(() => {
        if (!cardRef.current) return;

        const borderColor = '#FFFFFF';
        const tl = gsap.timeline({ 
            repeat: -1, 
            yoyo: true 
        });


        const cardWidth = cardRef.current.offsetWidth;


        // Top border animation
        tl.fromTo(
            borderTopRef.current, 
            { 
                width: 0, 
                backgroundColor: 'transparent', 
				borderRadius:2
            }, 
            { 
                width: `${cardWidth}px`, 
                backgroundColor: borderColor,
                duration: 1,
                ease: 'none',
				borderRadius:2
            }
        );

        // Right border animation
        tl.fromTo(
            borderRightRef.current, 
            { 
                height: 0, 
                backgroundColor: 'transparent' 
            }, 
            { 
                height: '100%', 
                backgroundColor: borderColor,
                duration: 1,
                ease: 'none'
            }
        );

        // Bottom border animation
        tl.fromTo(
            borderBottomRef.current, 
            { 
                width: 0, 
                backgroundColor: 'transparent' 
            }, 
            { 
                width: `${cardWidth}px`,
                backgroundColor: borderColor,
                duration: 1,
                ease: 'none'
            }
        );

        // Left border animation
        tl.fromTo(
            borderLeftRef.current, 
            { 
                height: 0, 
                backgroundColor: 'transparent' 
            }, 
            { 
                height: '100%', 
                backgroundColor: borderColor,
                duration: 1,
                ease: 'none'
            }
        );

        return () => {
            tl.kill();
        };
    }, []);


	return (
		<div ref = {cardRef} className="p-5 overflow-hidden relative bg-black rounded-xl text-white ">
			 <span
            ref={borderTopRef}
            className="absolute top-0 left-0 h-[2px] w-0 bg-transparent z-10 rounded-full"
            data-testid="border-top"
        />
        <span
            ref={borderRightRef}
            className="absolute top-0 right-0 w-[2px] h-0 bg-transparent z-10 rounded-full"
            data-testid="border-right"
        />
        <span
            ref={borderBottomRef}
            className="absolute bottom-0 right-0 h-[2px] w-0 bg-transparent z-10 rounded-full"
            data-testid="border-bottom"
        />
        <span
            ref={borderLeftRef}
            className="absolute bottom-0 left-0 w-[2px] h-0 bg-transparent z-10 rounded-full"
            data-testid="border-left"
        />

			<div className="flex items-center">
				<div className="relative flex w-[40px] h-[40px] mb-3">
					<img
						className=""
						src={sourceImage}
						alt={webappName}
					></img>
					{haveStar && (
						<img
							data-testid="star-icon"
							src=""
							alt=""
							className="absolute right-0 "
						/>
					)}
				</div>

				<CustomAppNameText
					content={webappName}
					path="/"
				></CustomAppNameText>
			</div>
			<div className="mb-4">
				<CustomTextDescriptionCard content={description}></CustomTextDescriptionCard>
			</div>

			{numberpeopleLikes && listImageUrlOfPeople?.length !== 0 && (
				<div className="flex justify-between items-center">
					<div className="flex">
						{listImageUrlOfPeople?.map((each, index) => {
							return (
								<img
									src={each}
									alt={`User ${index + 1}`}
									key={index}
									className="[&:not(:first-child)]:-ml-3 rounded-full"
								/>
							);
						})}
					</div>

					<div>{numberpeopleLikes}</div>
				</div>
			)}
		</div>
	);
};

export default CardComment;
