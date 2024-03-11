import { executeGraphql } from "./graphqlApi";
import {
	ProductsGetByCollectionSlugDocument,
	type ProductsGetByCollectionSlugQuery,
	CollectionsGetListDocument,
	type CollectionsGetListQuery,
} from "@/gql/graphql";

export const getProductsCollections = async (): Promise<
	CollectionsGetListQuery["collections"]
> => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument, {});

	return graphqlResponse.collections;
};


export const getProductsByCollectionSlug = async (
	slug: string,
): Promise<ProductsGetByCollectionSlugQuery["collection"]> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCollectionSlugDocument,
		{
			slug,
		},
	);
	return graphqlResponse.collection;
};
