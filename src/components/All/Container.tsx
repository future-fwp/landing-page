// import React, { ReactElement } from "react";

// const Container = ({ children }: { children: ReactElement }) => {
// 	return <div className="max-w-[72rem] mx-auto sm:px-6 px-4">{children}</div>;
// };

// export default Container;
import tw from "tailwind-styled-components";

const Container = tw.div`max-w-[72rem] mx-auto sm:px-6 px-4 relative`;
export default Container;
