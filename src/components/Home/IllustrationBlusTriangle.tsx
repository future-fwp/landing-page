

const IllustrationBlusTriangle = ({ position }: { position: string }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="342"
			height="393"
			className={`absolute ${position} blur-3xl`}
		>
			<defs>
				<linearGradient
					id="bs-a"
					x1="19.609%"
					x2="50%"
					y1="14.544%"
					y2="100%"
				>
					<stop
						offset="0%"
						stop-color="#20B2AA"
					></stop>
					<stop
						offset="100%"
						stop-color="#20B2AA"
						stop-opacity="0"
					></stop>
				</linearGradient>
			</defs>
			<path
				fill="url(#bs-a)"
				fill-rule="evenodd"
				d="m104 .827 461 369-284 58z"
				transform="translate(0 -112.827)"
				opacity=".7"
			></path>
		</svg>
	);
};

export default IllustrationBlusTriangle;
