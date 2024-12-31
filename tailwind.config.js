/** @type {import('tailwindcss').Config} */
export default {
	darkMode:'class', 
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {},
			colors: {
				primary: "#20B2AA",
				secondary:"#1A2B3C", 
				tertiary:"#4B5563",
				
				
			},
			fontSize:{
				"sm":"1rem", 
			}, 
		
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			textColor:{
				
			}
		},
	},
	
	animation: {
        "slide-down": "slideDown 5s infinite",
        "slide-up": "slideUp 5s infinite",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "33%": { transform: "translateY(100%)" },
          "66%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(300%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "33%": { transform: "translateY(-100%)" },
          "66%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(-300%)" },
        },
      },
	plugins: [],
};

// #9333EA
