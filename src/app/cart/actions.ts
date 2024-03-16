"use server";

import { revalidateTag } from "next/cache";
import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartChangeProductQuantityDocument,
	type CartChangeProductQuantityMutation,
	type CartChangeProductQuantityMutationVariables,
} from "@/gql/graphql";
import { cookies } from "next/headers";
import { addProductToCart, findOrCreateCartAndAddProduct, getCartById } from "@/api/cart";

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
		next: {
			tags: ["cart"],
		},
	});
	if (!graphqlResponse) {
		throw notFound();
	}
	revalidateTag("/cart");

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
