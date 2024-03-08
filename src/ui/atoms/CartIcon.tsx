"use client";

// import { getCartById } from "@/api/cart";
import { Paths } from "@/paths";
// import { cookies } from "next/headers";
import Link from "next/link";
import { useState } from "react";

export const CartIcon = async () => {
	const [productsQuantity, setProductsQuantity] = useState(0);

	// const cartId = cookies().get("cartId")?.value;

	// if (cartId) {
	// 	const products = await getCartById(cartId);
	// 	const number = products?.items.reduce((acc, item) => {
	// 		return acc + item.quantity;
	// 	}, 0);
	// 	if (number) setProductsQuantity(number);
	// }

	return (
		<Link className="cursor-pointer" href={Paths.CART}>
			<div className="relative flex h-[76px] items-center justify-center px-2">
				<svg width="32px" height="32px">
					<use href="/icons.svg#shoping-card"></use>
				</svg>
				{productsQuantity ? (
					<p className="absolute bottom-3 right-0 mr-2 h-5 w-5 rounded-full bg-rose-500 py-[2px] text-center align-middle text-xs text-neutral-100">
						{productsQuantity}
					</p>
				) : null}
			</div>
		</Link>
	);
};
