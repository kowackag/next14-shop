import { Route } from "next";
import { ReactNode } from "react";

export const CustomLink = ({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) => {
	return (
		<a
			className="my-4 border border-zinc-200 bg-zinc-700 px-6 py-2 text-center text-zinc-100 shadow-sm transition-colors hover:bg-zinc-600"
			href={href as Route}
		>
			{children}
		</a>
	);
};
