import Container from "../components/ComponentsForAll/Container";
import CustomSpanGreenGradient from "../components/ComponentsForAll/CustomSpanGreenGradient";
import CustomTitle from "../components/ComponentsForAll/CustomTitle";
import CustomParagraphGrayText from "../components/ComponentsForAll/CustomParagraph";
import FeatureContainers from "../components/ComponentsForAll/FeatureContainer";
import RadialCanvas from "../components/Home/RadialCanvas";

import { changeLogData } from "../utils/data";


const ChangeLog = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute z-10 inset-0 w-[100vw]">
                <RadialCanvas />
            </div>
            <Container>
                <div className="relative z-10">
                    <div className="text-center mb-16">
                        <CustomSpanGreenGradient
                            content="Updates"
                            addlayout=""
                        />
                        <CustomTitle
                            content="Product changelog"
                            addlayout="pb-4"
                        />
                        <CustomParagraphGrayText
                            content="Stay up to date with all our product changes"
                            customparagraphgrayprops="text-center"
                        />
                    </div>

                    <FeatureContainers props="max-w-3xl mx-auto backdrop-blur-sm bg-black/30 rounded-xl p-8">
                        {changeLogData.map((entry, index) => (
                            <div key={entry.version} className={`mb-12 ${index !== changeLogData.length - 1 ? 'border-b border-gray-800 pb-12' : ''}`}>
                                <div className="flex items-center mb-4">
                                    <span className="text-primary font-semibold mr-2">v{entry.version}</span>
                                    <span className="text-gray-500">• {entry.date}</span>
                                </div>
                                <ul className="space-y-4">
                                    {entry.changes.map((change, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="mr-3 mt-1 text-primary">•</span>
                                            <CustomParagraphGrayText
                                                content={change}
                                                customparagraphgrayprops="!text-left"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </FeatureContainers>
                </div>
            </Container>
        </section>
    );
};

export default ChangeLog;
