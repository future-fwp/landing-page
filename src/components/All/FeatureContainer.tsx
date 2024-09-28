import tw from "tailwind-styled-components";

interface Props {
	props: string;
}

const FeatureContainers = tw.div<Props>`${(p) => {
	return p.props;
}}`;

export default FeatureContainers;
