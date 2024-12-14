import CustomSpanGreenGradient from "./ComponentsForAll/CustomSpanGreenGradient";
import CustomLinkWithArrow from "./ComponentsForAll/CustomLinkWithArrow";



const PlanHeader = ({
	content,
	amountMoney,
	isGreenColor,
	customforpricecomponent,
	isHeader
}: {
	content: string;
	isGreenColor?: boolean;
	isHeader?:boolean; 
	amountMoney: string;
	
	customforpricecomponent?: boolean;
}) => {
	return (
		<div className="p-6 border">
			<div className="text-[#475569] pb-4 mb-4">
				{!isHeader ? <CustomSpanGreenGradient
					content={content}
					addlayout="text-[1.125rem] "
				></CustomSpanGreenGradient>:<div className="pb-[2rem]">&nbsp;</div>}
				<div className="!text-[1.125rem] font-semibold text-gray-500 mb-1">
					{isHeader ? " ":"$"}
					<span className="!text-[1.875rem] leading-[1.333] -tracking-[0.017em] text-gray-200">{isHeader ?undefined : amountMoney}</span>
					<span className=" ">{isHeader?" ":"/mo"}</span>
				</div>
				<div>
					<span>{isHeader ?<div className="pb-[1.75rem]">&nbsp;</div>:"Everything at your fingertips."}</span>
				</div>
				{!isHeader ? <CustomLinkWithArrow
					content="Get started"
					primary={true}
					to="/"
					addLayOut={`!flex justify-center !w-full `}
					customforpricecomponent={customforpricecomponent}
				></CustomLinkWithArrow>:<div>&nbsp;</div>}
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
						<div className="text-white font-normal py-2">{text ? <div className = "mt-4">{text}</div> : <div className="md:hidden border">&nbsp;</div>}</div>
					</>
				) : (
					<>
						<p className="font-normal border flex items-center max-md:hidden py-2">
							{
								<svg
									className={`fill-primary mr-3 md:hidden ${displayOnlyKeyFeature ? "hidden" : undefined}`}
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="9"
								>
									<path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
								</svg>
							}
							{text ? text : <div className="border">&nbsp;</div>}
						</p>
						<p className="font-normal flex items-center md:hidden py-2 ">
							<svg
								className={`fill-primary mr-3 ${
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

const FeatureDetail = ({
	title,
	listOfFeatures,
	displayOnlyKeyFeature,
  }: {
	title: string;
	listOfFeatures: Array<{
    subFeature: string;
    quantity: string | number;
  }>;
	displayOnlyKeyFeature?: boolean;
  }) => {
	return (
	  <div className="border text-gray-400 text-[1rem] ">
		<PriceWrapperTextFeature
		  text={title}
		  isHeader={true}
		></PriceWrapperTextFeature>
  
		{listOfFeatures.map((feature, index) => (
		  <PriceWrapperTextFeature
			text={displayOnlyKeyFeature ? feature.subFeature : `${feature.quantity}`}
			key={index}
			isHeader={false}
			featureKey={displayOnlyKeyFeature ? "" : feature.subFeature}
			displayOnlyKeyFeature={displayOnlyKeyFeature}
		  ></PriceWrapperTextFeature>
		))}
	  </div>
	);
  };


type PlanFeature = {
  [key: string]: Array<{
    type: string;
    mode: string;
    subFeature: string;
    quantity: string | number;
  }>;
};

interface PricingPlan {
	content: string;
	amountMoney: string;
	isGreenColor?: boolean;
	customforpricecomponent?: boolean;
	features: PlanFeature;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    content: "Pro", 
    amountMoney: "24",
    isGreenColor: true,
    features: {
      'Usage': [
        { type: "Social", mode: "Connections", subFeature: "Social Connections", quantity: 100 },
        { type: "Domain", mode: "Custom", subFeature: "Custom Domains", quantity: 4 },
        { type: "User", mode: "Role", subFeature: "User Role Management", quantity: "Unlimited" },
        { type: "Database", mode: "External", subFeature: "External Databases", quantity: 1 }
      ],
      'Custom Connection': [
        { type: "API", mode: "Integration", subFeature: "API Integrations", quantity: "Basic" },
        { type: "Webhook", mode: "Support", subFeature: "Webhook Support", quantity: "Limited" }
      ],
      'Advanced Deployment Options': [
        { type: "CI/CD", mode: "Pipeline", subFeature: "CI/CD Pipeline", quantity: "Basic" },
        { type: "Environment", mode: "Staging", subFeature: "Staging Environments", quantity: 1 }
      ],
      'Extra Add-ons': [
        { type: "Branding", mode: "Custom", subFeature: "Custom Branding", quantity: "Basic" },
        { type: "Analytics", mode: "Dashboard", subFeature: "Analytics Dashboard", quantity: "Standard" }
      ]
    }
  },
  {
    content: "Team",
    amountMoney: "49",
    isGreenColor: true,
    customforpricecomponent: true,
    features: {
      'Usage': [
        { type: "Social", mode: "Connections", subFeature: "Social Connections", quantity: 250 },
        { type: "Domain", mode: "Custom", subFeature: "Custom Domains", quantity: 8 },
        { type: "User", mode: "Role", subFeature: "User Role Management", quantity: "Advanced" },
        { type: "Database", mode: "External", subFeature: "External Databases", quantity: 3 }
      ],
      'Custom Connection': [
        { type: "API", mode: "Integration", subFeature: "API Integrations", quantity: "Advanced" },
        { type: "Webhook", mode: "Support", subFeature: "Webhook Support", quantity: "Full" }
      ],
      'Advanced Deployment Options': [
        { type: "CI/CD", mode: "Pipeline", subFeature: "CI/CD Pipeline", quantity: "Advanced" },
        { type: "Environment", mode: "Staging", subFeature: "Staging Environments", quantity: 3 }
      ],
      'Extra Add-ons': [
        { type: "Branding", mode: "Custom", subFeature: "Custom Branding", quantity: "Advanced" },
        { type: "Analytics", mode: "Dashboard", subFeature: "Analytics Dashboard", quantity: "Premium" }
      ],
      'Admin Roles': [
        { type: "Role", mode: "Customization", subFeature: "Role Customization", quantity: "Full" },
        { type: "Access", mode: "Controls", subFeature: "Access Controls", quantity: "Granular" }
      ]
    }
  },
  {
    content: "Company",
    amountMoney: "85",
    isGreenColor: true,
    features: {
      'Usage': [
        { type: "Social", mode: "Connections", subFeature: "Social Connections", quantity: "Unlimited" },
        { type: "Domain", mode: "Custom", subFeature: "Custom Domains", quantity: "Unlimited" },
        { type: "User", mode: "Role", subFeature: "User Role Management", quantity: "Enterprise" },
        { type: "Database", mode: "External", subFeature: "External Databases", quantity: "Unlimited" }
      ],
      'Custom Connection': [
        { type: "API", mode: "Integration", subFeature: "API Integrations", quantity: "Enterprise" },
        { type: "Webhook", mode: "Support", subFeature: "Webhook Support", quantity: "Premium" }
      ],
      'Advanced Deployment Options': [
        { type: "CI/CD", mode: "Pipeline", subFeature: "CI/CD Pipeline", quantity: "Enterprise" },
        { type: "Environment", mode: "Staging", subFeature: "Staging Environments", quantity: "Unlimited" }
      ],
      'Extra Add-ons': [
        { type: "Branding", mode: "Custom", subFeature: "Custom Branding", quantity: "Enterprise" },
        { type: "Analytics", mode: "Dashboard", subFeature: "Analytics Dashboard", quantity: "Enterprise" }
      ],
      'Admin Roles': [
        { type: "Role", mode: "Customization", subFeature: "Role Customization", quantity: "Enterprise" },
        { type: "Access", mode: "Controls", subFeature: "Access Controls", quantity: "Full Enterprise" }
      ],
      'Deploy and Monitor': [
        { type: "Monitoring", mode: "Tools", subFeature: "Monitoring Tools", quantity: "Advanced" },
        { type: "Performance", mode: "Insights", subFeature: "Performance Insights", quantity: "Comprehensive" }
      ],
      'Enterprise Add-ons': [
        { type: "Infrastructure", mode: "Dedicated", subFeature: "Dedicated Infrastructure", quantity: "Yes" },
        { type: "Integration", mode: "Custom", subFeature: "Custom Integrations", quantity: "Unlimited" }
      ],
      'Support': [
        { type: "Support", mode: "Channels", subFeature: "Support Channels", quantity: "Multiple" },
        { type: "Response", mode: "Time", subFeature: "Response Time", quantity: "24/7" }
      ],
      'Premium Support': [
        { type: "Account", mode: "Manager", subFeature: "Dedicated Account Manager", quantity: "Yes" },
        { type: "Support", mode: "Priority", subFeature: "Priority Support", quantity: "Highest" }
      ]
    }
  }
];

const featureKeys = Array.from(new Set(
	PRICING_PLANS.flatMap(plan => 
	  Object.keys(plan.features)
	)
  ));
  const Pricing: React.FC = () => {
	return (
	  <div className="text-[0.87rem] leading-[1.5715] font-medium relative">
		<div className="grid md:grid-cols-4 grid-cols-1">
		  {/* Leftmost column for feature titles */}
		  <div className="max-md:hidden border">
			<PlanHeader content="" amountMoney="0" isHeader={true} />
  
			{featureKeys.map((each, index) => {
        // Gather the concatenated type + mode strings for the current featureKey
        const combinedFeatures = PRICING_PLANS.flatMap(plan =>
          plan.features[each]?.map(feature => `${feature.type} + ${feature.mode}`) || []
        );

        return (
          <FeatureDetail
            key={index}
            title={each} // Title remains the featureKey
            listOfFeatures={[{subFeature:'', quantity:0}, {subFeature:'', quantity:0}, {subFeature:'', quantity:0}, {subFeature:'', quantity:0}]}
          />
        );
      })}
		  </div>
  
		  {/* Pricing Plan Columns */}
		  {PRICING_PLANS.map((plan, index) => (
			<div key={plan.content} className={index === 1 ? "border" : ""}>
			  {/* Plan Header */}
			  <PlanHeader
				content={plan.content}
				amountMoney={plan.amountMoney}
				isGreenColor={plan.isGreenColor}
				customforpricecomponent={plan.customforpricecomponent}
			  />



  
			  {/* Mobile View */}
			  <div className="md:hidden">
				{Object.entries(plan.features).map(([title, features]) => (
				  <FeatureDetail
					key={title}
					title={title}
					listOfFeatures={features}
				  />
				))}
			  </div>
  
			  {/* Desktop View */}
			  <div className="max-md:hidden">
				{featureKeys.map((featureKey, featureIndex) => {
				  const features = plan.features[featureKey] || []; // Default to empty array
				  return (
					<FeatureDetail
					  key={`${plan.content}-${featureKey}-${featureIndex}`}
					  title={featureIndex === 0 ? featureKey : ""}
					  listOfFeatures={features}
					/>
				  );
				})}
			  </div>
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  
export default Pricing;
