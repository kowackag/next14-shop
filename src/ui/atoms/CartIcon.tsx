import Link from "next/link";
import { cookies } from "next/headers";
import { Paths } from "@/paths";
import { getCartById } from "@/api/cart";

export const CartIcon = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return (
			<Link className="cursor-pointer" href={Paths.CART}>
				<div className="relative flex h-[76px] items-center justify-center px-2">
					<svg width="32px" height="32px">
						<use href="/icons.svg#shoping-card"></use>
					</svg>
				</div>
			</Link>
		);
	}

	const cart = await getCartById(cartId);

	const quantity = cart?.items.reduce((acc:number, product) => {
		return acc + product.quantity;
	}, 0);

	return (
		<Link
			className="cursor-pointer"
			href={Paths.CART}
			aria-label="go to shoping cart"
		>
			<div className="relative flex h-[76px] items-center justify-center px-2">
				<svg width="32px" height="32px">
					<use href="/icons.svg#shoping-card"></use>
				</svg>

				<p className="absolute bottom-3 right-0 mr-2 h-5 w-5 rounded-full bg-rose-700 py-[2px] text-center align-middle text-xs text-neutral-100">
					{quantity}
				</p>
			</div>
		</Link>
	);
};
