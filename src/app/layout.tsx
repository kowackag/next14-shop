// import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/ui/organisms/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// import { Loading } from "@/ui/atoms/Loading";

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
				<main>
					{/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
					{children}
				</main>
				<footer>
					<p>created by: M.Kowacka</p>
				</footer>
			</body>
		</html>
	);
}
