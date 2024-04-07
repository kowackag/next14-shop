import { getCartById } from "@/api/cart";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { SubTitle } from "../atoms/Title";
import { formatMoney } from "@/utils/helpers";

export const CartSummary = async ({ cartId }: { cartId: string }) => {
	const cart = await getCartById(cartId);
	const totalPrice = cart?.items.reduce((acc, elem) => {
		return acc + elem.quantity * elem.product.price;
	}, 0);

	const handleStripePaymentAction = async () => {
		"use server";

		if (!process.env.STRIPE_SECRET_KEY) {
			throw new Error("Missing STRIPE_SECRET_KEY env variable");
		}
		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
			apiVersion: "2023-10-16",
			typescript: true,
		});

		const cart = await getCartById(cartId);
		if (!cart) {
			return;
		}
		const session = await stripe.checkout.sessions.create({
			metadata: {
				cartId: cart.id,
			},
			line_items: cart.items
				.map((item) => {
					if (!item.product) null;
					return {
						price_data: {
							currency: "pln",
							product_data: {
								name: item.product.name,
								description: item.product.name,
								images: item.product.images.map((i) => i.url),
							},
							unit_amount: item.product.price,
						},
						quantity: item.quantity,
					};
				})
				.filter(Boolean),
			mode: "payment",
			success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `http://localhost:3000/cart/canceled`,
		});
		if (session?.url) {
			cookies().set("cartId", "");
			redirect(session.url);
		}
	};

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
