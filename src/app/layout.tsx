import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/ui/molecules/NavBar";
import { MobileMenuButton } from "@/ui/atoms/MobileMenuButton";

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
				<header className="flex items-center justify-between p-4 shadow-md">
					<p className="text-3xl font-semibold sm:text-4xl">eminent</p>
					<NavBar />
					<MobileMenuButton />
					<div>basket</div>
				</header>
				<main className="mx-auto px-6 py-8 sm:p-16 lg:max-w-7xl">
					{children}
				</main>
				<footer>
					<p>created by: M.Kowacka</p>
				</footer>
			</body>
		</html>
	);
}
