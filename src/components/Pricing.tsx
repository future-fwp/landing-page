
import CustomSpanPurpleGradient from "./All/CustomSpanPurpleGradient";
import CustomLinkWithArrow from "./All/CustomLinkWithArrow";



const PlanHeader = ({
	content,
	amountMoney,
	isPurpleColor,
	customforpricecomponent,
}: {
	content: string;
	isPurpleColor?: boolean;
	amountMoney: string;
	
	customforpricecomponent?: boolean;
}) => {
	return (
		<div className="p-6 ">
			<div className="text-[#475569] pb-4 mb-4">
				<CustomSpanPurpleGradient
					content={content}
					addlayout="text-[1.125rem] "
				></CustomSpanPurpleGradient>
				<div className="!text-[1.125rem] font-semibold text-gray-500 mb-1">
					$
					<span className="!text-[1.875rem] leading-[1.333] -tracking-[0.017em] text-gray-200">{amountMoney}</span>
					<span className=" ">/mo</span>
				</div>
				<div>
					<span>Everything at your fingertips.</span>
				</div>
				<CustomLinkWithArrow
					content="Get started"
					primary={true}
					to="/"
					addLayOut={`!flex justify-center !w-full `}
					customforpricecomponent={customforpricecomponent}
				></CustomLinkWithArrow>
			</div>
		</div>
	);
};

const PriceWrapperTextFeature = ({
	text,
	isHeader,
	featureKey,
	displayOnlyKeyFeature,
}: {
	text: string;
	isHeader: boolean;
	featureKey?: string;
	displayOnlyKeyFeature?: boolean;
}) => {
	return (
		<div className="text-[1rem] px-4">
			<div className={`${isHeader ? "" : ""}`}>
				{isHeader ? (
					<>
						<div className="text-white font-normal py-2 mt-4">{text ? text : <>&nbsp;</>}</div>
					</>
				) : (
					<>
						<p className="font-normal flex items-center max-md:hidden py-2">
							{
								<svg
									className={`fill-purple-700 mr-3 ${displayOnlyKeyFeature ? "hidden" : undefined}`}
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="9"
								>
									<path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
								</svg>
							}
							{text ? text : <>&nbsp;</>}
						</p>
						<p className="font-normal flex items-center md:hidden py-2">
							<svg
								className={`fill-purple-700 mr-3 ${
									displayOnlyKeyFeature || !featureKey ? "hidden" : undefined
								}`}
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="9"
							>
								<path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
							</svg>
							{text ? (
								<>
									{text} {featureKey}
								</>
							) : (
								<>&nbsp;</>
							)}
						</p>
					</>
				)}
			</div>
		</div>
	);
};

const FeatureUsage = ({
	title,
	listOfFeatures,
	displayOnlyKeyFeature,
}: {
	title: string;
	listOfFeatures: { [keyfeature: string]: string }[];
	displayOnlyKeyFeature?: boolean;
}) => {
	return (
		<div className="text-gray-400 text-[1rem] ">
			<PriceWrapperTextFeature
				text={title}
				isHeader={true}
			></PriceWrapperTextFeature>

			{listOfFeatures.map((each, index) => {
				const [keyfeature, value] = Object.entries(each)[0];
				return (
					<PriceWrapperTextFeature
						text={displayOnlyKeyFeature ? keyfeature : value}
						key={index}
						isHeader={false}
						featureKey={displayOnlyKeyFeature ? "" : keyfeature}
						displayOnlyKeyFeature={displayOnlyKeyFeature}
					></PriceWrapperTextFeature>
				);
			})}
		</div>
	);
};

const Pricing = () => {
	return (
		<div className="text-[0.87rem] leading-[1.5715] font-medium relative">
			<div className="grid md:grid-cols-4 grid-cols-1">
				<div className="max-md:hidden">
					<PlanHeader
						content={"Pro"}
						amountMoney={"24"}
						isPurpleColor={true}
					></PlanHeader>

					<div className="md:hidden">
						<FeatureUsage
							title="Usage"
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
						<FeatureUsage
							title="Usage"
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
						<FeatureUsage
							title="Usage"
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
					</div>
					<div className="max-md:hidden">
						<FeatureUsage
							title="Usage"
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
							displayOnlyKeyFeature={true}
						></FeatureUsage>
						<FeatureUsage
							title="Usage"
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
							displayOnlyKeyFeature={true}
						></FeatureUsage>
						<FeatureUsage
							title="Usage"
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
							displayOnlyKeyFeature={true}
						></FeatureUsage>
					</div>
				</div>
				<div>
					<PlanHeader
						content={"Pro"}
						amountMoney={"24"}
						isPurpleColor={true}
					></PlanHeader>
					<div className="md:hidden">
						<FeatureUsage
							title="Usage"
							listOfFeatures={[
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
					</div>

					<div className="max-md:hidden">
						<FeatureUsage
							title=""
							listOfFeatures={[
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
						<FeatureUsage
							title=""
							listOfFeatures={[
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
						<FeatureUsage
							title=""
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
					</div>
				</div>
				<div className="border">
					<PlanHeader
						content={"Team"}
						amountMoney={"49"}
						isPurpleColor={true}
						customforpricecomponent={true}
					></PlanHeader>
					<div className="md:hidden">
						<FeatureUsage
							title=""
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
					</div>
					<div className="max-md:hidden">
						<FeatureUsage
							title=""
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
						<FeatureUsage
							title=""
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
						<FeatureUsage
							title=""
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
					</div>
				</div>
				<div>
					<PlanHeader
						content={"Company"}
						amountMoney={"85"}
						isPurpleColor={true}
					></PlanHeader>
					<div className="md:hidden">
						<FeatureUsage
							title="Usage"
							listOfFeatures={[
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
					</div>
					<div className="max-md:hidden">
						<FeatureUsage
							title=""
							listOfFeatures={[
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
						<FeatureUsage
							title=""
							listOfFeatures={[
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
						<FeatureUsage
							title=""
							listOfFeatures={[
								// "100 Social Connections",
								// "4 Custom Domains",
								// "Unlimited User Role Management",
								// "1 External Databases",
								{ "Social Connections": "100" },
								{ "Custom Domains": "4" },
								{ "User Role Management": "Unlimited " },
								{ "External Databases": "1" },
							]}
						></FeatureUsage>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
