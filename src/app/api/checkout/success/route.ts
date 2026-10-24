import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function GET(request: NextRequest): Promise<Response> {
	const sessionId = request.nextUrl.searchParams.get("sessionId");
	if (!sessionId) {
		redirect("/");
	}
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});
	const session = await stripe.checkout.sessions.retrieve(sessionId);

	const cartId = cookies().get("cartId")?.value;
	if (
		session.payment_status === "paid" &&
		session.metadata?.cartId === cartId
	) {
		cookies().delete("cartId");
	}

	 redirect(`/cart/success?sessionId=${sessionId}`);
}
