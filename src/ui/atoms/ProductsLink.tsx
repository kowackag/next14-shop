import { Paths } from "@/paths";
import Link from "next/link";
import { getProductsCategoriesNames } from "@/api/categories";
import { Route } from "next";
import { getProductsCollectionsNames } from "@/api/collections";

export const ProductsLinks = async () => {
	const categoriesNames = await getProductsCategoriesNames();

	const collectionsNames = await getProductsCollectionsNames();

	const categoryLinks = categoriesNames.data.map((item) => {
		return {
			name: item.name,
			href: `${Paths.CATEGORIES}/${item.slug}`,
			exact: false,
		};
	});

	const collectionLinks = collectionsNames.data.map((item) => {
		return {
			name: item.name,
			href: `${Paths.COLLECTIONS}/${item.slug}`,
			exact: false,
		};
	});

	return (
		<article className="my-10 px-4">
			<h3 className="mb-4 text-lg font-bold">Products</h3>
			<ul>
				{categoryLinks.map((link) => (
					<li key={link.name}>
						<Link className="py-2 block text-sm" href={link.href as Route}>
							{link.name}
						</Link>
					</li>
				))}
				{collectionLinks.map((link) => (
					<li key={link.name}>
						<Link className="py-2 block text-sm" href={link.href as Route}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</article>
	);
};
