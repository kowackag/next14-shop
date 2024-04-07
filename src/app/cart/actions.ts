"use server";

import { revalidateTag } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import Stripe from "stripe";

import { executeGraphql } from "@/api/graphqlApi";
import {
	CartChangeProductQuantityDocument,
	type CartChangeProductQuantityMutation,
	type CartChangeProductQuantityMutationVariables,
} from "@/gql/graphql";
import {
	addProductToCart,
	findOrCreateCartAndAddProduct,
	getCartById,
} from "@/api/cart";

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

export const handleStripePaymentAction = async () => {
	"use server";

	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return;
	}
	const cart = await getCartById(cartId);
	if (!cart) {
		return;
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items
			.map((item) => {
				if (!item.product) null;
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: item.product.name,
							description: item.product.name,
							images: item.product.images.map((i) => i.url),
						},
						unit_amount: item.product.price,
					},
					quantity: item.quantity,
				};
			})
			.filter(Boolean),
		mode: "payment",
		success_url: `http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
	});
	if (session?.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
};
