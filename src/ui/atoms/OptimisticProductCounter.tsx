"use client";

import { useOptimistic } from "react";
import { changeProductQuantityInCart } from "@/app/cart/actions";

export const OptimisticProductCounter = ({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	const decrementQuantity = async () => {
		setOptimisticQuantity(optimisticQuantity - 1);
		await changeProductQuantityInCart({
			cartId,
			productId,
			quantity: optimisticQuantity - 1,
		});
	};

	const incrementQuantity = async () => {
		setOptimisticQuantity(optimisticQuantity + 1);
		await changeProductQuantityInCart({
			cartId,
			productId,
			quantity: optimisticQuantity + 1,
		});
	};
	return (
		<form className="flex max-w-max border-[1px] border-zinc-200 p-2">
			<label className="hidden" htmlFor="product-amount">
				Amount
			</label>
			<button type="submit" onClick={decrementQuantity} data-testid="decrement">
				-
			</button>
			{/* <input
				// data-testid="quantity"
				type="number"
				readOnly
				id="product-amount"
				name="quantity"
				value={optimisticQuantity}
				
			/>  */}
			<span
				className="inline-block w-14 border-zinc-100  text-center"
				data-testid="quantity"
			>
				{optimisticQuantity}
			</span>
			<button formAction={incrementQuantity} data-testid="increment">
				+
			</button>
		</form>
	);
};
