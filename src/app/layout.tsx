import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/ui/organisms/Header";
import "./globals.css";
import { Footer } from "@/ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
