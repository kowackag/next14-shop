import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { CartTable } from "@/ui/organisms/CartTable";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { Title } from "@/ui/atoms/Title";

import { getCartById } from "@/api/cart";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return (
			<SectionContainer>
				<p>No products</p>
			</SectionContainer>
		);
	}

	const cart = await getCartById(cartId);

	if (!cart) {
		return notFound();
	}

	return (
		<SectionContainer>
			<Title>Cart</Title>
			<CartTable products={cart.items} cartId={cart.id}/>
		</SectionContainer>
	);
}
