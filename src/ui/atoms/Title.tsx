export const Title = ({ children }: { children: React.ReactNode }) => {
	return (
		<h1 className="my-8 text-center text-2xl sm:text-left sm:text-3xl">
			{children}
		</h1>
	);
};

export const SubTitle = ({ children }: { children: React.ReactNode }) => {
	return <h2 className="my-6 text-center text-2xl sm:text-left">{children}</h2>;
};
