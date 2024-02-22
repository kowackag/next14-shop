"use client";

import { useState } from "react";

export const ProductCounter = () => {
	const [productAmount, setProductAmount] = useState(0);
	const decreaseAmount = () => {
		if (productAmount > 0) {
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
			<button onClick={decreaseAmount}>-</button>
			<input
				type="number"
				readOnly
				id="product-amount"
				value={productAmount}
				className="inline-block w-14 border-zinc-100 pl-4 text-center outline-none"
			/>
			<button onClick={increaseAmount}>+</button>
		</div>
	);
};
