import {
	addProductToCart,
	changeProductQuantityInCart,
	findOrCreateCartAndAddProduct,
	// createCart,
	// findOrCreateCartAndAddProduct,
	getCartById,
} from "@/api/cart";
import { AnimatedButton } from "@/ui/atoms/AnimatedButton";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { cookies } from "next/headers";

export const AddToCartForm = ({ id }: { id: string }) => {
	const addToCartAction = async (formData: FormData) => {
		"use server";

		console.log(formData);
		const quantity = Number(formData.get("quantity"));
		const cart = await findOrCreateCart(id, quantity);
		if (!cart) {
		} else {
			cookies().set("cartId", cart.id);
		}
	};
	return (
		<form action={addToCartAction}>
			<div className="mb-6 flex items-center">
				<p className="mr-2">Quantity:</p>
				<ProductCounter />
			</div>
			<AnimatedButton>Add to cart</AnimatedButton>
		</form>
	);
};

async function findOrCreateCart(productId: string, quantity: number) {
	const cartId = cookies().get("cartId")?.value;
	// console.log(cartId);
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			const exist = cart.items.some(
				(element) => element.product.id === productId,
			);
			return exist
				? changeProductQuantityInCart({ cartId, productId, quantity: 7 })
				: addProductToCart({ cartId, productId, quantity });
		}
		return findOrCreateCartAndAddProduct(productId, quantity, cartId);
	}

	return findOrCreateCartAndAddProduct(productId, quantity);
}
