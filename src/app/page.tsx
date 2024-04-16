import { notFound } from "next/navigation";

import { Suspense } from "react";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { Section } from "@/ui/atoms/Section";

import { getProductsCollections } from "@/api/collections";
import { getProductsCategories } from "@/api/categories";
import { SubTitle } from "@/ui/atoms/Title";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProducts } from "@/api/products";
import { ImageSection } from "@/ui/molecules/ImageSection";
import { Values } from "@/ui/molecules/Values";
import { Container } from "@/ui/atoms/Container";

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
			<Section>
				<SubTitle>Our products</SubTitle>
				<ProductList products={products.data.slice(-4)} />
			</Section>
			<Container className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 ">
				<section>
					<SubTitle>Our collections</SubTitle>
					<Suspense>
						<CollectionsList collections={allCollection.data} slider={true} />
					</Suspense>
				</section>
				<Values />
			</Container>
			<Section>
				<SubTitle>Our categories</SubTitle>
				<CategoriesList categories={allCategories} />
			</Section>
		</>
	);
}
