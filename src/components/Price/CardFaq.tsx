

const CardFaq = ({ question, answer, isVisible }: { question: string; answer: string;isVisible:boolean }) => {
	return (
		<div className="w-3/4">
	<p
		className="text-white font-bold mb-4 cursor-pointer"
		
	>
		{question}
	</p>
	<div
		className={`overflow-hidden transition-all duration-5000 ${

			isVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
		}`}
	>
		<span className="text-gray-400">{answer}</span>
	</div>
</div>

	);
};

export default CardFaq;
