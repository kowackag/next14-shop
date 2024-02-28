export const Title = ({ children }: { children: React.ReactNode }) => {
	return <h1 className="mb-6 text-2xl sm:text-3xl">{children}</h1>;
};

export const SubTitle = ({ children }: { children: React.ReactNode }) => {
	return <h2 className="mb-6 text-2xl">{children}</h2>;
};
