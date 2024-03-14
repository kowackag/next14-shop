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
} from "@/gql/graphql";
import { cookies } from "next/headers";

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

export async function findOrCreateCartAndAddProductToCart({
	productId,
	quantity,
}: {
	productId: string;
	quantity: number;
}) {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		const cart = await findOrCreateCartAndAddProduct(productId, quantity);

		cookies().set("cartId", cart.id, {
			httpOnly: true,
			sameSite: "lax",
		});
		return cart;
	} else {
		const cart = await getCartById(cartId);

		if (!cart) {
			throw Error();
		}

		const productToUpdate = cart.items.find(
			(element) => element.product.id === productId,
		);

		return productToUpdate
			? changeProductQuantityInCart({
					cartId,
					productId,
					quantity: productToUpdate.quantity + quantity,
				})
			: addProductToCart({ cartId, productId, quantity });
	}
}
