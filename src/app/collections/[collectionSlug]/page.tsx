import { notFound } from "next/navigation";

import { ProductList } from "@/ui/organisms/ProductList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";

import {
	getProductsByCollectionSlug,
	getProductsCollections,
} from "@/api/collections";

type CollectionsPageType = {
	readonly params: { collectionSlug: string };
	readonly searchParams: { [key: string]: string | string[] };
};

export default async function CollectionsPage({ params }: CollectionsPageType) {
	const allCollection = await getProductsCollections();
	if (!allCollection) {
		throw notFound();
	}

	const [collection] = await getProductsByCollectionSlug(params.collectionSlug);

	if (!collection) {
		throw notFound();
	}

	return (
		<SectionContainer>
			<h2 className="mb-6 text-2xl sm:text-3xl">Collections</h2>
			{/* <CategoriesList
				categories={allCollection}
				activeCategory={params.collectionSlug}
			/> */}
			{allCollection.map((collection) => (
				<p key={collection.slug}>{collection.name}</p>
			))}
			<h2 className="mb-6 text-2xl sm:text-3xl">{collection.collectionName}</h2>
			<ProductList products={collection.products} />
		</SectionContainer>
	);
}
