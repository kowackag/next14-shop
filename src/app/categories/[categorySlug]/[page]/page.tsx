import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { Title } from "@/ui/atoms/Title";

import {
	getProductsByCategorySlug,
	getProductsCategories,
} from "@/api/categories";
import { selectProductsOnPage } from "@/utils/helpers";

export async function generateMetadata({
	params,
}: ProductPageType): Promise<Metadata> {
	const category = await getProductsByCategorySlug(params.categorySlug);

	return {
		title: category?.name,
		description: "Modern products",
	};
}

type ProductPageType = {
	readonly params: { categorySlug: string; page: number };
	readonly searchParams: { [key: string]: string | string[] };
};

export default async function SingleCategoryPage({ params }: ProductPageType) {
	const productsNumberOnPage = 4;
	const allCategories = await getProductsCategories();
	const category = await getProductsByCategorySlug(params.categorySlug);

	if (!category || !allCategories) {
		throw notFound();
	}
	const productsOnPage = selectProductsOnPage(
		category.products,
		params.page,
		productsNumberOnPage,
	);

	return (
		<SectionContainer>
			<CategoriesList
				categories={allCategories}
				activeCategory={params.categorySlug}
			/>
			<Title>{category.name}</Title>
			<ProductList products={productsOnPage} />
			<Pagination
				pages={category.products.length}
				productsNumberOnPage={productsNumberOnPage}
				path={`categories/${params.categorySlug}`}
			/>
		</SectionContainer>
	);
}
