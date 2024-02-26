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
				<header className="flex items-center justify-between px-4 shadow-md">
					<p className="pb-2 text-3xl font-semibold sm:text-4xl">eminent</p>
					<NavBar />
					<MobileMenuButton />
					<div className="py-6">basket</div>
				</header>
				{/* className=" px-6 sm:px-16 " */}
				<main >{children}</main>
				<footer>
					<p>created by: M.Kowacka</p>
				</footer>
			</body>
		</html>
	);
}
