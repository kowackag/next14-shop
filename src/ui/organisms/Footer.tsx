import { Address } from "@/ui/atoms/Address";
import { Legal } from "@/ui/atoms/Legal";
import { ProductsLinks } from "@/ui/atoms/ProductsLink";

export const Footer = () => {
	return (
		<footer className="bg-zinc-800 pt-8 text-sm text-zinc-100">
			<div className="m-auto max-w-screen-2xl px-6 md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-3 ">
				<Address />
				<ProductsLinks />
				<Legal />
			</div>
			<div className="border-t border-zinc-700 py-8">
				<p className="m-auto max-w-screen-2xl text-center">
					Copyright © 2024 Małgorzata Kowacka
				</p>
			</div>
		</footer>
	);
};
