import { notFound } from "next/navigation";

import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
	type ProductGetByIdQuery,
} from "@/gql/graphql";

import { executeGraphql } from "./graphqlApi";

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
