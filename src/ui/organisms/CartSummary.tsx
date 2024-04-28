import { SubTitle } from "../atoms/Title";
import { getCartById } from "@/api/cart";
import { countTotalPrice, formatMoney } from "@/utils/helpers";
import { handleStripePaymentAction } from "@/app/cart/actions";
import { CustomLink } from "@/ui/atoms/CustomLink";
import { Paths } from "@/paths";

export const CartSummary = async ({ cartId }: { cartId: string }) => {
	const cart = await getCartById(cartId);

	if (!cart || !cart.items.length) {
		return (
			<div className="my-4 flex justify-end">
				<CustomLink href={Paths.PRODUCTS}>Add products</CustomLink>
			</div>
		);
	}
	const totalPrice = countTotalPrice(cart.items);
	return (
		<div className="my-6 ml-auto w-full max-w-96 justify-end">
			<div>
				<SubTitle>Cart Totals</SubTitle>
				<div className="flex w-full justify-between border p-4">
					<p className="font-bold">Price:</p>
					<p>{totalPrice ? formatMoney(totalPrice / 100) : 0}</p>
				</div>
				<form action={handleStripePaymentAction} className="m-auto my-8">
					<button
						type="submit"
						className="border border-zinc-200 bg-zinc-700 px-6 py-2 text-zinc-100 shadow-sm transition-colors hover:bg-zinc-600"
					>
						Proceed To Checkout
					</button>
				</form>
			</div>
		</div>
	);
};
