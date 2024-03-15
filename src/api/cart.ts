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
	CartQuantityGetByIdDocument,
	CartRemoveProductMutationVariables,
	CartRemoveProductDocument,
} from "@/gql/graphql";

export const getCartById = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			cartId: id,
		},
	});

	return graphqlResponse.cart;
};

export const getCartQuantityById = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartQuantityGetByIdDocument,
		variables: {
			cartId: id,
		},
	});

	return graphqlResponse.cart;
};

export const findOrCreateCartAndAddProduct = async (
	productId: string,
	quantity: number,
	cartId?: string,
): Promise<CartFindOrCreateAndAddProductMutation["cartFindOrCreate"]> => {
	if (cartId) {
		const graphqlResponse = await executeGraphql({
			query: CartFindOrCreateAndAddProductDocument,
			variables: {
				productId,
				quantity,
				cartId,
			},
			next: {
				tags: ["cart"],
			},
		});
		return graphqlResponse.cartFindOrCreate;
	}
	const graphqlResponse = await executeGraphql({
		query: CartFindOrCreateAndAddProductDocument,
		variables: {
			productId,
			quantity,
		},
	});

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
	const graphqlResponse = await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
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
	const graphqlResponse = await executeGraphql({
		query: CartChangeProductQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
	});
	if (!graphqlResponse) {
		throw notFound();
	}
	return graphqlResponse.cartChangeItemQuantity;
};

export const RemoveProductFromCart = async ({
	id,
	productId,
}: CartRemoveProductMutationVariables) => {
	const graphqlResponse = await executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			id,
			productId,
		},
	});
	if (!graphqlResponse) {
		throw notFound();
	}
	return graphqlResponse.cartRemoveItem;
};
