import { ValueListItem } from "@/ui/atoms/ValueListItem";
import { SectionContainer } from "../atoms/SectionContainer";

type ValueListItemType = { href: string; name: string; description: string };

export const Values = () => {
	const shopValues: ValueListItemType[] = [
		{
			href: "/icons.svg#shipping",
			name: "Free shipping",
			description: "Free shipping on all  order above $100",
		},
		{
			href: "/icons.svg#support",
			name: "Support 24/7",
			description: "Contact us 24 hours a day by 7 days a week",
		},
		{
			href: "/icons.svg#return",
			name: "30 Days Return",
			description: "Simply return it within 30 days",
		},
		{
			href: "/icons.svg#payment",
			name: "Payment Secure",
			description: "We ensure 100% Payment Secure",
		},
	];

	return (
		<article className="flex justify-center lg:items-center">
			<h2 className="sr-only">Shop Values</h2>
			<ul className="grid sm:grid-cols-2 gap-4 lg:gap-8">
				{shopValues.map((value) => (
					<li key={value.name}>
						<ValueListItem
							name={value.name}
							href={value.href}
							description={value.description}
						/>
					</li>
				))}
			</ul>
		</article>
	);
};
