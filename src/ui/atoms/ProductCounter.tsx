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
		<div>
			<label className="hidden" htmlFor="product-amount">
				Amount
			</label>
			<button onClick={decreaseAmount}>-</button>
			<input
				type="number"
				readOnly
				id="product-amount"
				value={productAmount}
				className="inline-block border-zinc-100 px-2"
			/>
			<button onClick={increaseAmount}>+</button>
		</div>
	);
};
