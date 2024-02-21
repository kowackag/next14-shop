"use client";

import { AnimatedButton } from "@/ui/atoms/AnimatedButton";

export default async function BlogPage({
	params: { date, slug },
}: {
	params: { date: string; slug: string };
}) {
	// const pathname = params.pathname?.join("/") || [];

	return (
		<div>
			<p>
				Blog:{date} / {slug}
			</p>
			<AnimatedButton onClick={(e) => console.log(e)}>
				Add to cart
			</AnimatedButton>
		</div>
	);
}
