import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import {
	addProductToCart,
	changeProductQuantityInCart,
	findOrCreateCartAndAddProduct,
	getCartById,
} from "@/api/cart";
import { AnimatedButton } from "@/ui/atoms/AnimatedButton";
import { ProductCounter } from "@/ui/atoms/ProductCounter";

export const AddToCartForm = ({ id }: { id: string }) => {
	const addToCartAction = async (formData: FormData) => {
		"use server";

		try {
			const product = {
				productId: id,
				quantity: Number(formData.get("quantity")),
			};
			const cart = await findOrCreateCartAndAddProductToCart(product);
			cookies().set("cartId", cart.id, {
				httpOnly: true,
				sameSite: "lax",
			});
		} catch (err) {
			return notFound();
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

async function findOrCreateCartAndAddProductToCart({
	productId,
	quantity,
}: {
	productId: string;
	quantity: number;
}) {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return findOrCreateCartAndAddProduct(productId, quantity);
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
