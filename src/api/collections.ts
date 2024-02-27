import {
	ProductsGetByCollectionSlugDocument,
	ProductsGetCollectionDocument,
	ProductsGetCollectionQuery,
} from "@/gql/graphql";
import { ProductResponseItem, executeGraphql } from "./graphqlApi";

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
