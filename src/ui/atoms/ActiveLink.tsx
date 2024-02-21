"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const ActiveLink = ({
	href,
	children,
	// className,
	// activeClassName,
}: {
	href: string;
	children: React.ReactNode;
	// className: string;
	// activeClassName: string;
}) => {
	const pathname = usePathname();
	const isActive = href === pathname;
	return (
		<Link
			href={href}
			className={clsx("", {
				underline: isActive,
				"underline-offset-8": isActive,
			})}
		>
			{children}
		</Link>
	);
};
