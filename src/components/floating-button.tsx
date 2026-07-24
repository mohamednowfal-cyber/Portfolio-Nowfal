type TFloatingBtn = {
	className?: string;
	label: string;
	onClick?: () => void;
	href?: string;
	target?: string;
	rel?: string;
};
export const FloatingButton = ({
	label,
	className,
	href,
	target,
	rel,
}: TFloatingBtn) => {
	return (
		<a
			href={href}
			className={`floating-btn ${className}`}
			target={target}
			rel={rel}
		>
			<div>{label}</div>
			<span></span>
		</a>
	);
};
