import React, { useState } from "react";
import Container from "./Container";
import tw from "tailwind-styled-components";
const NavContainer = tw.div`md:h-[5rem] h-[4rem] flex items-center justify-between`;
import { Link } from "react-router-dom";
const linkNavBar = [
	{ linkName: "About", path: "/about" },
	{ linkName: "Integrations", path: "/integration" },
	{ linkName: "Pricing", path: "/price" },
	{ linkName: "Customers", path: "#" },
	{ linkName: "ChangeLog", path: "/changelog" },
];
import CustomLinkWithArrow from "./CustomLinkWithArrow";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<Container>
			<NavContainer>
				<div className="grow flex justify-start">
					<Link to="/">
						<img
							src="https://preview.cruip.com/stellar/images/logo.svg"
							alt="logo-stellar"
						/>
					</Link>
				</div>
				<div className="grow-0 max-md:hidden">
					<ul className="flex">
						{linkNavBar.map((each, index) => {
							return (
								<li
									key={JSON.stringify(each) + index}
									className="text-gray-300 text-[0.875rem]"
								>
									<Link
										className="mx-4"
										to={each.path}
									>
										{each.linkName}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="grow justify-end flex items-center text-gray-200">
					<li>
						<Link to="/signin">Sign In</Link>
					</li>
					<li className="ml-3">
						<CustomLinkWithArrow
							to="/signup"
							primary={false}
							content="Sign Up"
						/>
					</li>
				</ul>
				<div className="md:hidden ml-3">
					{showNavbar ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="white"
							className="size-6"
							//x-mark
							onClick={() => {
								setShowNavbar(!showNavbar);
							}}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="white"
							className="size-6"
							// hamburger
							onClick={() => {
								setShowNavbar(!showNavbar);
							}}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					)}
				</div>
			</NavContainer>
			{showNavbar && (
				<ul className=" px-4 py-1.5 select-none">
					{linkNavBar.map((each, index) => {
						return (
							<li
								key={JSON.stringify(each) + index}
								className="md:hidden py-1.5 text-white"
							>
								<Link to={each.path}>{each.linkName}</Link>
							</li>
						);
					})}
				</ul>
			)}
		</Container>
	);
};

export default Navbar;
