import { notFound } from "next/navigation";

import { Suspense } from "react";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";

import { getProductsCollections } from "@/api/collections";
import { getProductsCategories } from "@/api/categories";
import { SubTitle } from "@/ui/atoms/Title";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/products";
import { ImageSection } from "@/ui/molecules/ImageSection";

export default async function HomePage() {
	const allCategories = await getProductsCategories();
	const allCollection = await getProductsCollections();
	const products = await getProducts();

	if (!allCategories || !allCollection || !products) {
		throw notFound();
	}

	return (
		<div>
			<ImageSection />
			<SectionContainer>
				<SubTitle>Our products</SubTitle>
				<ProductList products={products.data.slice(-4)} />
			</SectionContainer>
			<SectionContainer>
				<SubTitle>Our categories</SubTitle>
				<CategoriesList categories={allCategories} />
			</SectionContainer>
			<SectionContainer>
				<SubTitle>Our collections</SubTitle>
				<Suspense>
					<CollectionsList collections={allCollection} />
				</Suspense>
			</SectionContainer>
		</div>
	);
}
