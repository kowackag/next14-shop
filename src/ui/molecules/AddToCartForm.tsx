import {
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
		console.log(formData, id)
		// const cart = await findOrCreateCart(items);
		// console.log(444, cart);
		// if (!cart) {
		// } else {
		// 	cookies().set("cartId", cart.id);
		// 	console.log(5, cart);
		// }

		// addToCart(cart.id, {
		// 	productId: id,
		// 	quantity: formData.values,
		// });
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

// async function findOrCreateCart(items) {
// 	const cartId = cookies().get("cartId")?.value;

// 	if (cartId) {
// 		const cart = await getCartById(cartId);
// 		if (cart) {
// 			return cart;
// 		}
// 		// return findOrCreateCartAndAddProduct (items);
// 	}

// 	// return findOrCreateCartAndAddProduct(items);
// }
// function addToCart(
// 	cartId: string,
// 	arg1: {
// 		productId: string;
// 		quantity: () => IterableIterator<FormDataEntryValue>;
// 	},
// ) {
// 	throw new Error("Function not implemented.");
// }
