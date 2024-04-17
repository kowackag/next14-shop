"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { RemoveProductFromCart } from "@/api/cart";
import { Icon } from "./Icon";

export const RemoveProductButton = ({
	productId,
	cartId,
}: {
	productId: string;
	cartId: string;
}) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const handleOnClick = async () => {
		startTransition(async () => {
			await RemoveProductFromCart({ productId, id: cartId });
			router.refresh();
		});
	};

	return (
		<button
			disabled={isPending}
			onClick={handleOnClick}
			aria-label="remove product"
		>
			<div className="text-zinc-400 transition hover:text-rose-700">
				<Icon href="/icons.svg#trash" />
			</div>
		</button>
	);
};
