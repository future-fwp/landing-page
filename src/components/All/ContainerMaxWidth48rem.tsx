
import tw from "tailwind-styled-components";
interface addlayout {
	addlayout: string;
}
const ContainerMaxWidth48remStyled = tw.div<addlayout>`max-w-[48rem] mx-auto ${(p) => {
	return p.addlayout;
}}`;

const ContainerMaxWidth48rem = ({ addlayout }: { addlayout: string }) => {
	return <ContainerMaxWidth48remStyled addlayout={addlayout}></ContainerMaxWidth48remStyled>;
};

export default ContainerMaxWidth48rem;
