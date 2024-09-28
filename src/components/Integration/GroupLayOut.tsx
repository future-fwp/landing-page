import React from "react";
import CustomMedianHeadingIntegration from "./CustomMedianHeadingIntegration";
import GridLayOut from "../All/GridLayOut";
import CardComment from "./CardComment";
const GroupLayOut = () => {
	return (
		<div>
			<CustomMedianHeadingIntegration
				content="Engineering"
				addLayOut="pb-[2rem]"
			></CustomMedianHeadingIntegration>
			<GridLayOut
				smallSpan={"grid-cols-1"}
				mediumSpan={"sm:grid-cols-2"}
				largeSpan={"lg:grid-cols-3"}
				gapElement={"gap-6"}
			>
				<CardComment
					description="loremjdkdkkdkkdkd"
					webappName="Future"
					sourceImage=""
					haveStar={true}
				></CardComment>
				<CardComment
					description="loremjdkdkkdkkdkd"
					webappName="Future"
					sourceImage=""
					haveStar={true}
				></CardComment>
				<CardComment
					description="loremjdkdkkdkkdkd"
					webappName="Future"
					sourceImage=""
					haveStar={true}
				></CardComment>
			</GridLayOut>
		</div>
	);
};

export default GroupLayOut;

// { title, arrayOfCard }: { title: string; arrayOfCard: { sourceImage: string }[] }
