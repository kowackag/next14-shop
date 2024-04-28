import { cookies } from "next/headers";

import { CartListShorts } from "@/ui/organisms/CartListShorts";
import { CartEmptyInfo } from "@/ui/atoms/CartEmptyInfo";
import { CartModalTemplate } from "@/ui/atoms/CartModalTemplate";

import { getCartById } from "@/api/cart";

export default async function CartModalPage() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return (
			<CartModalTemplate>
				<CartEmptyInfo />
			</CartModalTemplate>
		);
	}

	const cart = await getCartById(cartId);

	return (
		<CartModalTemplate>
			{cart?.items.length ? (
				<CartListShorts products={cart.items} />
			) : (
				<CartEmptyInfo />
			)}
		</CartModalTemplate>
	);
}
