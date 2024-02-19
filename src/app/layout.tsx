import type { Metadata } from "next";
import "./globals.css";

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
				<header>shop</header>
				<main className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</main>
				<footer>
					<p>created by: M.Kowacka</p>
				</footer>
			</body>
		</html>
	);
}
