import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { SubTitle, Title } from "@/ui/atoms/Title";

import {
	getProductsByCategorySlug,
	getProductsCategories,
} from "@/api/categories";

export const generateStaticParams = async () => {
	const categories = await getProductsCategories();
	return categories.data.map((category) => ({
		slug: category.slug,
		name: category.name,
		images:
			category.products[0] &&
			category.products[0].images[0] &&
			category.products[0].images[0].url,
	}));
};

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

	// const category = await getProductsByCategorySlug(params.categorySlug);

	// if (!category) {
	// 	throw notFound();
	// }

	return (
		<SectionContainer>
			<Title>Categories</Title>
			<CategoriesList
				categories={allCategories}
				activeCategory={params.categorySlug}
			/>
			{/* <SubTitle>{category.name}</SubTitle>
			<ProductList products={category.products} />
			<Pagination
				pages={category.products.length}
				productsNumberOnPage={4}
				path={`categories/${params.categorySlug}`}
			/> */}
		</SectionContainer>
	);
}
