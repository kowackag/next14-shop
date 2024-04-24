import { getCartById } from "@/api/cart";
import { CartEmptyInfo } from "@/ui/atoms/CartEmptyInfo";
import { SubTitle } from "@/ui/atoms/Title";
import { CartListShorts } from "@/ui/organisms/CartListShorts";
import { cookies } from "next/headers";

export default async function CartModalPage() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return <CartEmptyInfo />;
	}

	const cart = await getCartById(cartId);

	return (
		<div className="fixed bottom-0 left-0 right-0 top-0 flex justify-end overflow-hidden overscroll-none bg-black  bg-opacity-50">
			<div className="flex h-full w-96 flex-col justify-between bg-slate-100 p-5">
				<SubTitle>Shopping cart</SubTitle>
				{cart?.items.length ? (
					<CartListShorts products={cart.items} />
				) : (
					<CartEmptyInfo />
				)}
			</div>
		</div>
	);
}
