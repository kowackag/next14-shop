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
		if (optimisticQuantity > 1) {
			// startTransition(() => {
			setOptimisticQuantity(optimisticQuantity - 1);
			// });
			await changeProductQuantityInCart({
				cartId,
				productId,
				quantity: optimisticQuantity - 1,
			});
		}
	};

	const incrementQuantity = async () => {
		// startTransition(() => {
		setOptimisticQuantity(optimisticQuantity + 1);
		// });
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
			<button
				type="submit"
				formAction={decrementQuantity}
				// onClick={decrementQuantity}
				data-testid="decrement"
				disabled={optimisticQuantity < 2}
			>
				-
			</button>
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
