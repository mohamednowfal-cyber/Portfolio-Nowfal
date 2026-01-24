type TTextHoverProps = {
	text: string;
	className?: string;
};

export const TextHover = ({ text, className }: TTextHoverProps) => {
	// Split text into words for proper wrapping on tablets
	const words = text.split(' ');

	return (
		<p className={`hover-text ${className}`}>
			{words.map((word, wordIndex) => (
				<span key={wordIndex} className="word-group">
					{word.split('').map((char, charIndex) => (
						<span
							key={`${wordIndex}-${charIndex}`}
							data-char={char}
							style={{
								'--delay': `${0.035 * (wordIndex * 10 + charIndex)}s`,
							} as React.CSSProperties}
						>
							{char}
						</span>
					))}
					{wordIndex < words.length - 1 && (
						<span
							key={`${wordIndex}-space`}
							data-char=" "
							className="space-char"
							style={{
								'--delay': `${0.035 * ((wordIndex + 1) * 10 - 1)}s`,
							} as React.CSSProperties}
						>
							{' '}
						</span>
					)}
				</span>
			))}
		</p>
	);
};
