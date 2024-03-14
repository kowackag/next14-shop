export const Title = ({ children }: { children: React.ReactNode }) => {
	return (
		<h1
			className="my-4 text-center text-2xl sm:text-left sm:text-3xl"
			role="heading"
		>
			{children}
		</h1>
	);
};

export const SubTitle = ({ children }: { children: React.ReactNode }) => {
	return <h2 className="my-4 text-center text-2xl sm:text-left">{children}</h2>;
};
