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
import { Values } from "@/ui/molecules/Values";

export default async function HomePage() {
	const allCategories = await getProductsCategories();
	const allCollection = await getProductsCollections();
	const products = await getProducts();

	if (!allCategories || !allCollection || !products) {
		throw notFound();
	}

	return (
		<>
			<ImageSection />
			<SectionContainer>
				<SubTitle>Our products</SubTitle>
				<ProductList products={products.data.slice(-4)} />
			</SectionContainer>
			<div className="m-auto grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:gap-8 2xl:px-0">
				<section>
					<SubTitle>Our collections</SubTitle>
					<Suspense>
						<CollectionsList collections={allCollection.data} slider={true} />
					</Suspense>
				</section>
				<Values />
			</div>
			<SectionContainer>
				<SubTitle>Our categories</SubTitle>
				<CategoriesList categories={allCategories} />
			</SectionContainer>
		</>
	);
}
