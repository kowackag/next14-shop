import { notFound } from "next/navigation";
import { executeGraphql } from "./graphqlApi";
import {
	CartAddProductDocument,
	CartQuantityGetByIdDocument,
	CartFindOrCreateAndAddProductDocument,
	CartRemoveProductDocument,
	CartGetByIdDocument,
	CartChangeProductQuantityDocument,
	type CartChangeProductQuantityMutation,
	type CartAddProductMutationVariables,
	type CartRemoveProductMutationVariables,
	type CartAddProductMutation,
	type CartFindOrCreateAndAddProductMutation,
	type CartChangeProductQuantityMutationVariables,
} from "@/gql/graphql";

export const getCartById = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			cartId: id,
		},
		cache: "no-store",
	});

	return graphqlResponse.cart;
};

export const getCartQuantityById = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: CartQuantityGetByIdDocument,
		variables: {
			cartId: id,
		},
		cache: "no-store",
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
			cache: "no-store",
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
		cache: "no-store",
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
		cache: "no-store",
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
		cache: "no-store",
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
		cache: "no-store",
	});
	if (!graphqlResponse) {
		throw notFound();
	}
	return graphqlResponse.cartRemoveItem;
};
