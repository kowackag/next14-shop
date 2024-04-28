"use server";

import { revalidateTag } from "next/cache";
import { RemoveProductFromCart } from "@/api/cart";

export const handleOnClick = async (productId: string, cartId: string) => {
	await RemoveProductFromCart({ productId, id: cartId });
	revalidateTag("cart");
};
