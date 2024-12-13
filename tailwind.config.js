/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {},
			colors: {
				primary: "#20B2AA", // Seablue color (Light Sea Green)
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	safelist: [
		{
			pattern: /grid-cols-./,
		},
	],
	plugins: [],
};

// #9333EA
