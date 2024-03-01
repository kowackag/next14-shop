import { Suspense } from "react";

import { NavBar } from "@/ui/molecules/NavBar";
import { MobileMenuButton } from "@/ui/atoms/MobileMenuButton";
import { SearchField } from "@/ui/atoms/SearchField";

export const Header = () => {
	return (
		<header className="px-4 shadow-md ">
			<div className="m-auto flex max-w-screen-2xl items-center justify-between ">
				<p className="pb-2 text-3xl font-semibold sm:text-4xl">eminent</p>
				<NavBar />
				<MobileMenuButton />
				<Suspense>
					<SearchField />
				</Suspense>
				<div className="py-6">Cart</div>
			</div>
		</header>
	);
};
