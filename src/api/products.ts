import { notFound } from "next/navigation";

import { executeGraphql } from "./graphqlApi";
import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
	type ProductGetByIdQuery,
	ProductsGetRelatedListDocument,
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
	id,
}: {
	category: string;
	id: string;
}) => {
	const graphqlResponse = await executeGraphql(ProductsGetRelatedListDocument, {
		cat: category,
		id,
	});
	return graphqlResponse.products;
};
