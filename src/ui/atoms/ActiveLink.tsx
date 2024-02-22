"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	activeClassName: string;
	className: string;
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	activeClassName,
	className,
	exact,
}: ActiveLinkProps<T>) => {
	console.log(exact);
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx([className], {
				[activeClassName]: isActive,
			})}
			// className={clsx("", {
			// 	[className]: true,
			// 	[activeClassName]: isActive,
			// })}
			aria-label={`Open the ${children} page`}
		>
			{children}
		</Link>
	);
};
