import { Suspense } from "react";

import { NavBar } from "@/ui/molecules/NavBar";
import { MobileMenuButton } from "@/ui/atoms/MobileMenuButton";
import { SearchField } from "@/ui/atoms/SearchField";

export const Header = () => {
	return (
		<header className="px-4 shadow-md ">
			<div className="m-auto flex max-w-screen-2xl items-center justify-between  ">
				<p className="pb-2 text-3xl font-semibold sm:text-4xl">eminent</p>
				<NavBar />
				<div className="flex items-center justify-between">
					<Suspense>
						<SearchField />
					</Suspense>
					<MobileMenuButton />
					<div className="relative flex h-[76px] items-center justify-center px-2">
						<svg width="32px" height="32px">
							<use href="/icons.svg#shoping-card"></use>
						</svg>
						<p className="absolute bottom-3 right-0 mr-2 h-5 w-5 rounded-full bg-rose-500 py-[2px] text-center align-middle text-xs text-neutral-100">
							10
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};
