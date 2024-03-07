import { getCartById } from "@/api/cart";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

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
	{
		cart.items.map(({ product, quantity }) => {
			console.log(`${product.name}: ${quantity} `);
		});
	}

	return (
		<SectionContainer>
			<h3>Card id:" "cartId" </h3>
			
		</SectionContainer>
	);
}
