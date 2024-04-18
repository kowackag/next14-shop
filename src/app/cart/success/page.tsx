import { Paths } from "@/paths";
import { Container } from "@/ui/atoms/Container";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});
	const session = await stripe.checkout.sessions.retrieve(
		searchParams.sessionId,
		{},
	);

	return (
		<Container>
			<p>
				Your payment status is:
				<span className="font-bold uppercase text-sky-600">
					{session.payment_status}
				</span>
			</p>
			<Link
				className="my-6 inline-block border border-zinc-200 bg-zinc-700 px-6 py-2 text-zinc-100 shadow-sm transition-colors hover:bg-zinc-600"
				href={Paths.PRODUCTS}
			>
				Buy more
			</Link>
		</Container>
	);
}
