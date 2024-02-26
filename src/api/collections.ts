import {
	ProductsGetByCollectionSlugDocument,
	ProductsGetCollectionDocument,
} from "@/gql/graphql";
import { ProductResponseItem, executeGraphql } from "./graphqlApi";

export const getProductsCollections = async (): Promise<any[]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetCollectionDocument,
		{},
	);

	return graphqlResponse.collections.map((collection) => ({
		id: collection.id,
		slug: collection.slug,
		name: collection.name,
		image: collection.products.map((images) => {
			return images.images.map((img) => img.url).join(",");
		}),
	}));
};

export const getProductsByCollectionSlug = async (
	slug: ProductResponseItem["slug"],
): Promise<any[]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCollectionSlugDocument,
		{
			slug,
		},
	);
	const products = graphqlResponse.collections.map((collection) => ({
		collectionName: collection.name,
		collectionSlug: slug,
		products: collection.products.map((product) => ({
			id: product.id,
			name: product.name,
			price: product.price,
			image: {
				src: product.images[0]?.url,
				alt: product.name,
			},
		})),
	}));
	return products;
};
