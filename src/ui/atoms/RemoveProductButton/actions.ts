"use server";

import { RemoveProductFromCart } from "@/api/cart";
import { revalidateTag } from "next/cache";

export const handleOnClick = async (productId: string, cartId: string) => {
	await RemoveProductFromCart({ productId, id: cartId });
	revalidateTag("cart");
};
