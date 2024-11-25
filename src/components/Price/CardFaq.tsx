

const CardFaq = ({ question, answer }: { question: string; answer: string }) => {
	return (
		<div>
			<p className="text-white font-bold mb-4">{question}</p>
			<span className="text-gray-400">{answer}</span>
		</div>
	);
};

export default CardFaq;
