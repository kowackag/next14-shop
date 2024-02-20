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
					<p className="text-3xl font-semibold sm:text-4xl">Eminent</p>
					<NavBar />
					<MobileMenuButton />
					<div>basket</div>
				</header>
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
