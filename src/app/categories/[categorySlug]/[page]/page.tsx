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
	const [category] = await getProductsByCategorySlug(params.categorySlug);

	if (!category) {
		throw notFound();
	}
	const allCategories = await getProductsCategories();
	if (!allCategories) {
		throw notFound();
	}

	return (
		<section className="px-6 py-8 sm:px-16">
			<h1 className="mb-6 text-2xl sm:text-3xl">Our categories</h1>
			<CategoriesList
				categories={allCategories}
				activeCategory={params.categorySlug}
			/>
			<h2 className="mb-6 text-2xl sm:text-3xl">{category.categoryName}</h2>
			<ProductList products={category.products} />
			<Pagination
				pages={category.products.length}
				productsNumberOnPage={2}
				path={`categories/${params.categorySlug}`}
			/>
		</section>
	);
}
