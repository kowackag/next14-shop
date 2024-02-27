import { Suspense } from "react";
import type { Metadata } from "next";

import { Header } from "@/ui/organisms/Header";

import "./globals.css";

import { Loading } from "@/ui/atoms/Loading";

export const metadata: Metadata = {
	title: "Fashion",
	description: "Modern products",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
				<footer>
					<p>created by: M.Kowacka</p>
				</footer>
			</body>
		</html>
	);
}
