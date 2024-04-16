import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { CartTable } from "@/ui/organisms/CartTable";
import { Section } from "@/ui/atoms/Section";
import { Title } from "@/ui/atoms/Title";

import { getCartById } from "@/api/cart";
import { CartSummary } from "@/ui/organisms/CartSummary";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return (
			<p className="m-auto max-w-screen-xl px-6 py-8">
				Your shoping cart is empty
			</p>
		);
	}

	const cart = await getCartById(cartId);

	if (!cart) {
		return notFound();
	}

	return (
		<Section>
			<Title>Shoping Cart</Title>
			<CartTable products={cart.items} cartId={cart.id} />
			<CartSummary cartId={cart.id} />
		</Section>
	);
}
