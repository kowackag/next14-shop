export const SectionContainer = ({
	children,
	className,
	...props
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<section
			className={`m-auto max-w-screen-xl px-6 py-8 2xl:px-0 ${className ?? ""}`}
			{...props}
		>
			{children}
		</section>
	);
};
