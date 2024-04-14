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
			<SectionContainer className="grid  grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
				<div>
					<SubTitle>Our collections</SubTitle>
					<Suspense>
						<CollectionsList collections={allCollection.data} slider={true} />
					</Suspense>
				</div>
			</SectionContainer>
			<SectionContainer>
				<SubTitle>Our categories</SubTitle>
				<CategoriesList categories={allCategories} />
			</SectionContainer>
		</div>
	);
}
