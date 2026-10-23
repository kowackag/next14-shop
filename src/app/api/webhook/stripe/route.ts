/// <reference types="stripe-event-types"/>

import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing STRIPE_WEBHOOK_SECRET");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});
	const signature = request.headers.get("stripe-signature");

	if (!signature) {
		return new Response("No signature", { status: 401 });
	}

	let event: Stripe.DiscriminatedEvent;
	try {
		event = stripe.webhooks.constructEvent(
			await request.text(),
			signature,
			process.env.STRIPE_WEBHOOK_SECRET,
		) as Stripe.DiscriminatedEvent;
	} catch {
		return new Response("Invalid signature", { status: 400 });
	}

	switch (event.type) {
		case "checkout.session.completed": {
			const cartId = event.data.object.metadata?.cartId;
			console.log(`Payment completed for cart: ${cartId ?? "unknown"}`);
			break;
		}
		case "checkout.session.expired":
		case "checkout.session.async_payment_failed": {
			console.log(`Payment not completed: ${event.type}`);
			break;
		}
	}

	return new Response(null, { status: 204 });
}
