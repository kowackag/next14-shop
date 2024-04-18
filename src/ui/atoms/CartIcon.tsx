import Link from "next/link";

import { cookies } from "next/headers";
import { Paths } from "@/paths";
import { getCartById } from "@/api/cart";
import { Icon } from "./Icon";

export const CartIcon = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return (
			<div className="relative flex h-[76px] items-center justify-center px-2">
				<Link
					className="cursor-pointer"
					href={Paths.CART}
					aria-label="go to shoping cart"
				>
					<Icon href="/icons.svg#shoping-card" width="32px" height="32px" />
				</Link>
			</div>
		);
	}

	const cart = await getCartById(cartId);

	const quantity = cart?.items.reduce((acc: number, product) => {
		return acc + product.quantity;
	}, 0);

	return (
		<div className="relative flex h-[76px] items-center justify-center px-2">
			<Link
				className="cursor-pointer"
				href={Paths.CART}
				aria-label="go to shoping cart"
			>
				<Icon href="/icons.svg#shoping-card" width="32px" height="32px" />
				<p className="absolute bottom-3 right-0 mr-2 h-5 w-5 rounded-full bg-rose-700 py-0.5 text-center align-middle text-xs text-neutral-100">
					{quantity}
				</p>
			</Link>
		</div>
	);
};
