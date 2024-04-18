import { notFound } from "next/navigation";

import { ProductList } from "@/ui/organisms/ProductList";
import { Section } from "@/ui/atoms/Section";
import { SubTitle, Title } from "@/ui/atoms/Title";

import {
	getProductsByCollectionSlug,
	getProductsCollections,
} from "@/api/collections";
import { CollectionsList } from "@/ui/organisms/CollectionsList";

type CollectionsPageType = {
	readonly params: { collectionSlug: string };
};

export const generateMetadata = async ({ params }: CollectionsPageType) => {
	const collection = await getProductsByCollectionSlug(params.collectionSlug);
	return {
		title: collection ? collection.name : "fassion",
	};
};

export default async function CollectionsPage({ params }: CollectionsPageType) {
	const collectionList = await getProductsCollections();
	const narrowedCollectionList = collectionList.data.filter(
		(item) => item.slug !== params.collectionSlug,
	);
	const collection = await getProductsByCollectionSlug(params.collectionSlug);

	if (!collection) {
		throw notFound();
	}

	return (
		<Section>
			<SubTitle>Collections</SubTitle>
			<CollectionsList collections={narrowedCollectionList} slider={false} />
			<Title>{collection.name}</Title>
			<ProductList products={collection.products} />
		</Section>
	);
}
