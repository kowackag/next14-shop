import { notFound } from "next/navigation";
import { findOrCreateCartAndAddProductToCart } from "@/app/cart/actions";
import { AnimatedButton } from "@/ui/atoms/AnimatedButton";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { revalidateTag } from "next/cache";

export const AddToCartForm = ({ id }: { id: string }) => {
	const addToCartAction = async (formData: FormData) => {
		"use server";

		try {
			const product = {
				productId: id,
				quantity: Number(formData.get("quantity")),
			};
			await findOrCreateCartAndAddProductToCart(product);
		} catch (err) {
			return notFound();
		}
		revalidateTag("cart");
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
