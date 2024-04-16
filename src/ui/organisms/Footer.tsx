import { Address } from "@/ui/atoms/Address";
import { Legal } from "@/ui/atoms/Legal";
import { ProductsLinks } from "@/ui/atoms/ProductsLink";
import { Container } from "@/ui/atoms/Container";

export const Footer = () => {
	return (
		<footer className="bg-zinc-800 pt-8 text-sm text-zinc-100">
			<Container className="md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-3 ">
				<Address />
				<ProductsLinks />
				<Legal />
			</Container>
			<div className="border-t border-zinc-700 py-8">
				<p className="m-auto max-w-screen-2xl text-center">
					Copyright © 2024 Małgorzata Kowacka
				</p>
			</div>
		</footer>
	);
};
