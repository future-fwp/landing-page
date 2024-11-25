
import CustomAppNameText from "./CustomAppNameText";
import CustomTextDescriptionCard from "./CustomTextDescriptionCard";
const CardComment = ({
	webappName,
	description,
	listImageUrlOfPeople,
	numberpeopleLikes,
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
	return (
		<div className="p-5 bg-gray-800 rounded-xl text-white ">
			<div className="flex items-center">
				<div className="relative flex w-[40px] h-[40px] mb-3">
					<img
						className=""
						src={sourceImage}
						alt={webappName}
					></img>
					{haveStar && (
						<img
							src="https://preview.cruip.com/stellar/images/star.svg"
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
									alt={each}
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
