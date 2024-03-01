"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import clsx from "clsx";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	activeClassName: string;
	className: string;
	exact?: boolean;
} & Omit<LinkProps<T>, "href">;

export const ActiveLink = <T extends string>({
	href,
	children,
	activeClassName,
	className,
	exact,
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx([className], {
				[activeClassName]: isActive,
			})}
			aria-current={isActive ? "page" : undefined}
			{...props}
		>
			{children}
		</Link>
	);
};
