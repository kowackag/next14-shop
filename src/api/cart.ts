import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import {
	CartAddProductDocument,
	type CartAddProductMutation,
	CartFindOrCreateAndAddProductDocument,
	type CartFindOrCreateAndAddProductMutation,
	CartGetByIdDocument,
	CartChangeProductQuantityDocument,
	type CartChangeProductQuantityMutation,
	type CartAddProductMutationVariables,
	type CartChangeProductQuantityMutationVariables,
} from "@/gql/graphql";

export const getCartById = async (id: string) => {
	const graphqlResponse = await executeGraphql(CartGetByIdDocument, {
		cartId: id,
	});

	return graphqlResponse.cart;
};

export const findOrCreateCartAndAddProduct = async (
	productId: string,
	quantity: number,
	cartId?: string,
): Promise<CartFindOrCreateAndAddProductMutation["cartFindOrCreate"]> => {
	if (cartId) {
		const graphqlResponse = await executeGraphql(
			CartFindOrCreateAndAddProductDocument,
			{
				productId,
				quantity,
				cartId,
			},
		);
		return graphqlResponse.cartFindOrCreate;
	}
	const graphqlResponse = await executeGraphql(
		CartFindOrCreateAndAddProductDocument,
		{
			productId,
			quantity,
		},
	);

	if (!graphqlResponse) {
		throw notFound();
	}

	return graphqlResponse.cartFindOrCreate;
};

export const addProductToCart = async ({
	cartId,
	productId,
	quantity,
}: CartAddProductMutationVariables): Promise<
	CartAddProductMutation["cartAddItem"]
> => {
	const graphqlResponse = await executeGraphql(CartAddProductDocument, {
		cartId,
		productId,
		quantity,
	});
	return graphqlResponse.cartAddItem;
};

export const changeProductQuantityInCart = async ({
	cartId,
	productId,
	quantity,
}: CartChangeProductQuantityMutationVariables): Promise<
	CartChangeProductQuantityMutation["cartChangeItemQuantity"]
> => {
	const graphqlResponse = await executeGraphql(
		CartChangeProductQuantityDocument,
		{
			cartId,
			productId,
			quantity,
		},
	);
	if (!graphqlResponse) {
		throw notFound();
	}
	console.log(6, graphqlResponse.cartChangeItemQuantity);
	return graphqlResponse.cartChangeItemQuantity;
};
