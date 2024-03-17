import { notFound } from "next/navigation";

import { sortedUniqBy } from "lodash";
import { executeGraphql } from "./graphqlApi";
import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
	type ProductGetByIdQuery,
	type ProductsGetByQueryQuery,
	type ProductsGetRelatedListQuery,
	ProductsGetRelatedListDocument,
	ProductsGetByQueryDocument,
	ProductsGetSortedListDocument,
	type ProductsGetSortedListQueryVariables,
} from "@/gql/graphql";

export const getProducts = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
	});
	return graphqlResponse.products;
};

export const getSortedByPriceProducts = async (
	sorted: ProductsGetSortedListQueryVariables["sortBy"],
) => {
	if (!sortedUniqBy) return notFound();

	const graphqlResponse = await executeGraphql({
		query: ProductsGetSortedListDocument,
		variables: { sortBy: sorted },
		// next: {
		// 	tags: ["products"],
		// },
	});
	return graphqlResponse.products;
};

export const getProductById = async (
	id: ProductListItemFragment["id"],
): Promise<ProductGetByIdQuery["product"]> => {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id,
		},
	});
	if (!product) {
		throw notFound();
	}

	return product;
};

export const getRelatedProducts = async ({
	category,
}: {
	category: string;
}): Promise<ProductsGetRelatedListQuery["category"]> => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetRelatedListDocument,
		variables: {
			catSlug: category,
		},
	});
	return graphqlResponse.category;
};

export const getProductsByQuery = async (
	query: string,
): Promise<ProductsGetByQueryQuery["products"]> => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByQueryDocument,
		variables: {
			query,
		},
	});
	return graphqlResponse.products;
};
