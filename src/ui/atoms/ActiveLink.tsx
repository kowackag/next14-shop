"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const ActiveLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
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
