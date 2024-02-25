import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

import { notFound } from "next/navigation";

type ProductPageType = {
	readonly params: { categorySlug: string; slug: string };
	readonly searchParams: { [key: string]: string | string[] };
};

export default async function SingleProductPage({ params }: ProductPageType) {
	const categories = await getProductsByCategorySlug(params.categorySlug);

	console.log(55555555555, categories[0].products);
	if (!categories) {
		throw notFound();
	}
	return (
		<div className="mx-auto lg:max-w-screen-xl">
			<h1>{categories[0].categoryName}</h1>
			<ProductList products={categories[0].products} />
		</div>
	);
}
