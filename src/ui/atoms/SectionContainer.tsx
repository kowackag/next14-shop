export const SectionContainer = ({
	children,
	...props
}: {
	children: React.ReactNode;

}) => {
	return (
		<section className="m-auto max-w-screen-xl px-6 py-8 2xl:px-0" {...props}>
			{children}
		</section>
	);
};
