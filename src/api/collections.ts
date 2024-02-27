import { type ProductResponseItem, executeGraphql } from "./graphqlApi";
import {
	ProductsGetByCollectionSlugDocument,
	type ProductsGetByCollectionSlugQuery,
	ProductsGetCollectionDocument,
	type ProductsGetCollectionQuery,
} from "@/gql/graphql";

export const getProductsCollections = async (): Promise<
	ProductsGetCollectionQuery["collections"]
> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetCollectionDocument,
		{},
	);

	return graphqlResponse.collections;
};

export const getProductsByCollectionSlug = async (
	slug: ProductResponseItem["slug"],
): Promise<ProductsGetByCollectionSlugQuery["collections"]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCollectionSlugDocument,
		{
			slug,
		},
	);
	return graphqlResponse.collections;
};
