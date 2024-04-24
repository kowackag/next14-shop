"use client";

import { useTransition } from "react";
import { Icon } from "../Icon";
import { handleOnClick } from "@/ui/atoms/RemoveProductButton/actions";
export const RemoveProductButton = ({
	productId,
	cartId,
}: {
	productId: string;
	cartId: string;
}) => {
	const [isPending] = useTransition();

	return (
		<button
			disabled={isPending}
			onClick={() => handleOnClick(productId, cartId)}
			aria-label="remove product"
		>
			<div className="text-zinc-400 transition hover:text-rose-700">
				<Icon href="/icons.svg#trash" />
			</div>
		</button>
	);
};
