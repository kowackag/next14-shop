export const Container = ({
	children,
	className,
	...props
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={`m-auto max-w-screen-xl px-6 2xl:px-0 ${className ?? ""}`}
			{...props}
		>
			{children}
		</div>
	);
};
