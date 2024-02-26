import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
	getProductsByCategorySlug,
	getProductsCategories,
} from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { ProductList } from "@/ui/organisms/ProductList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";

export const metadata: Metadata = {
	title: "Categories",
	description: "Modern products",
};

type ProductPageType = {
	readonly params: { categorySlug: string };
	readonly searchParams: { [key: string]: string | string[] };
};

export default async function SingleCategoryPage({ params }: ProductPageType) {
	const allCategories = await getProductsCategories();
	if (!allCategories) {
		throw notFound();
	}

	const [category] = await getProductsByCategorySlug(params.categorySlug);

	if (!category) {
		throw notFound();
	}

	return (
		<SectionContainer>
			<h2 className="mb-6 text-2xl sm:text-3xl">Categories</h2>
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
		</SectionContainer>
	);
}
