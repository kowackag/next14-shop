"use client";

import { useState } from "react";

export const ProductCounter = ({ initValue = 1 }: { initValue?: number }) => {
	const [productAmount, setProductAmount] = useState(initValue);
	const decreaseAmount = () => {
		if (productAmount > 1) {
			setProductAmount((amount) => amount - 1);
		}
	};
	const increaseAmount = () => {
		setProductAmount((amount) => amount + 1);
	};
	return (
		<div className="flex max-w-max border-[1px] border-zinc-200 p-2">
			<label className="hidden" htmlFor="product-amount">
				Amount
			</label>
			<button type="button" onClick={decreaseAmount} data-testid="decrement">
				-
			</button>
			<input
				// data-testid="quantity"
				type="number"
				readOnly
				id="product-amount"
				name="quantity"
				value={productAmount}
				className="inline-block w-14 border-zinc-100 pl-4 text-center outline-none"
			/>
			<button type="button" onClick={increaseAmount} data-testid="increment">
				+
			</button>
		</div>
	);
};
