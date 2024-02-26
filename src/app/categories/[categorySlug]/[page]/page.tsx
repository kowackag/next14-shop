import {
	getProductsByCategorySlug,
	getProductsCategories,
} from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { ProductList } from "@/ui/organisms/ProductList";

import { notFound } from "next/navigation";

type ProductPageType = {
	readonly params: { categorySlug: string };
	readonly searchParams: { [key: string]: string | string[] };
};

export default async function SingleCategoryPage({ params }: ProductPageType) {
	const [categories] = await getProductsByCategorySlug(params.categorySlug);

	if (!categories) {
		throw notFound();
	}
	const categoriesa = await getProductsCategories();
	if (!categoriesa) {
		throw notFound();
	}

	return (
		<div className="mx-auto lg:max-w-screen-xl">
			<h1 className="mb-6 text-2xl sm:text-3xl">Our categories</h1>
			<CategoriesList
				categories={categoriesa}
				activeCategory={params.categorySlug}
			/>
			<h2 className="mb-6 text-2xl sm:text-3xl">{categories.categoryName}</h2>
			<ProductList products={categories.products} />
			<Pagination
				pages={categories.products.length}
				productsNumberOnPage={2}
				path={`categories/${params.categorySlug}`}
			/>
		</div>
	);
}
