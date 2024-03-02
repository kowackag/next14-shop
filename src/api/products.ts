import { notFound } from "next/navigation";

import { executeGraphql } from "./graphqlApi";
import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
	type ProductGetByIdQuery,
	type ProductsGetByQueryQuery,
	ProductsGetRelatedListDocument,
	ProductsGetByQueryDocument,
} from "@/gql/graphql";

export const getProducts = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	return graphqlResponse.products;
};

export const getProductById = async (
	id: ProductListItemFragment["id"],
): Promise<ProductGetByIdQuery["product"]> => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
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
}) => {
	const graphqlResponse = await executeGraphql(ProductsGetRelatedListDocument, {
		catSlug: category,
	});
	return graphqlResponse.category;
};

export const getProductsByQuery = async (
	query: string,
): Promise<ProductsGetByQueryQuery["products"]> => {
	console.log(query)
	const graphqlResponse = await executeGraphql(ProductsGetByQueryDocument, {
		query,
	});
	return graphqlResponse.products;
};
