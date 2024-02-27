import { type ProductResponseItem, executeGraphql } from "./graphqlApi";
import {
	ProductsGetByCollectionSlugDocument,
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
): Promise<any[]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCollectionSlugDocument,
		{
			slug,
		},
	);
	return graphqlResponse.collections;
};
