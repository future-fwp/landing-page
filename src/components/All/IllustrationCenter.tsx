import React, { ReactElement } from "react";

const IllustrationCenter = ({ position, children }: { position: string; children: ReactElement }) => {
	return (
		<div className="absolute inset-0 -z-10 transform overflow-hidden">
			<div className={`absolute ${position} transform -translate-x-[50%] left-1/2 `}>{children}</div>
		</div>
	);
};

export default IllustrationCenter;
