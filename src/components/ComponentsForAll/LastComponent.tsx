
import CustomLinkWithArrow from "./CustomLinkWithArrow";
import { LastPagesComponent } from "../../utils/data";
const LastComponent = ({
	contentforSpanPurpleGradient,
	HeaderText,
	DescriptionText,
	LinkText,
}: {
	contentforSpanPurpleGradient: string;
	HeaderText: string;
	DescriptionText: string;
	LinkText: string;
}) => {
	return (
		<section className="bg-black py-16 md:py-24">
							<div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
								<div className="text-center">
									<div className="inline-flex items-center rounded-full text-primary bg-white/20 px-4 py-1.5 mb-6">
										<span className="text-sm font-medium">
											{contentforSpanPurpleGradient}
										</span>
									</div>
									
									<h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
										{HeaderText}
										<p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white ml-3">
											Security Workflow
										</p>
									</h2>
									
									<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
										{DescriptionText}
									</p>
									
									<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
										<CustomLinkWithArrow
											content="Start Free Trial"
											primary={true}
											to="/signup"
											addLayOut="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transform transition-transform hover:scale-105"
										></CustomLinkWithArrow>
										
										<a 
											href='/'
											className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all"
										>
											{LinkText}
											<svg 
												xmlns="http://www.w3.org/2000/svg" 
												className="h-6 w-6 ml-3 text-primary" 
												fill="none" 
												viewBox="0 0 24 24" 
												stroke="currentColor"
											>
												<path 
													strokeLinecap="round" 
													strokeLinejoin="round" 
													strokeWidth={2} 
													d="M13 7l5 5m0 0l-5 5m5-5H6" 
												/>
											</svg>
										</a>
									</div>
									
									<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-70 hover:opacity-100 transition-opacity">
										{LastPagesComponent.map((item, index) => (
											<div 
												key={index} 
												className="flex flex-col items-center justify-center text-white space-y-2 p-4 rounded-xl transition-all hover:bg-white/10"
											>
												<div className="text-primary">{item.icon}</div>
												<span className="text-sm font-medium">{item.text}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</section>
	);
};

export default LastComponent;
