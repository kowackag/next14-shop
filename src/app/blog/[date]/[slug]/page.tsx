"use client";

import { AnimatedButton } from "@/ui/atoms/AnimatedButton";
import { ValueDescription } from "@/ui/atoms/ValueDescription";

type ValueDescriptionType = { href: string; name: string; description: string };

export default async function BlogPage({
	params: { date, slug },
}: {
	params: { date: string; slug: string };
}) {
	// const pathname = params.pathname?.join("/") || [];

	const shopValues: ValueDescriptionType[] = [
		{
			href: "/icons/values.svg#delivery",
			name: "Free shipping",
			description: "Free shipping on all  order above $100",
		},
		{
			href: "/icons/values.svg#delivery",
			name: "Support 24/7",
			description: "Contact us 24 hours a day by 7 days a week",
		},
		{
			href: "/icons/values.svg#return",
			name: "30 Days Return",
			description: "Simply return it within 30 days",
		},
		{
			href: "/icons/values.svg#return2",
			name: "jjj",
			description: "dddddd cddddddddddddddd dddddddddasdc aceio efipuwm vger",
		},
	];

	return (
		<div>
			<p>
				Blog:{date} / {slug}
			</p>
			<AnimatedButton onClick={(e) => console.log(e)}>
				Add to cart
			</AnimatedButton>
			{shopValues.map((value: ValueDescriptionType) => (
				<ValueDescription
					key={value.name}
					name={value.name}
					href={value.href}
					description={value.description}
				/>
			))}
		</div>
	);
}
