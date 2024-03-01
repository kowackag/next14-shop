import { notFound } from "next/navigation";

import { ProductList } from "@/ui/organisms/ProductList";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { Title } from "@/ui/atoms/Title";

import { getProductsByCollectionSlug } from "@/api/collections";

type CollectionsPageType = {
	readonly params: { collectionSlug: string };
	readonly searchParams: { [key: string]: string | string[] };
};

export const generateMetadata = async ({ params }: CollectionsPageType) => {
	const [collection] = await getProductsByCollectionSlug(params.collectionSlug);
	return {
		title: collection ? collection.name : "fassion",
	};
};

export default async function CollectionsPage({ params }: CollectionsPageType) {
	const [collection] = await getProductsByCollectionSlug(params.collectionSlug);

	if (!collection) {
		throw notFound();
	}

	return (
		<SectionContainer>
			<Title>{collection.name}</Title>
			<ProductList products={collection.products} />
		</SectionContainer>
	);
}
