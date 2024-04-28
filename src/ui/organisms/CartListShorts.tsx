import { CartShortsProductListItem } from "@/ui/molecules/CartShortsProductListItem";
import { CustomLink } from "@/ui/atoms/CustomLink";

import { type CartItemsFragment } from "@/gql/graphql";
import { Paths } from "@/paths";
import { countTotalPrice, formatMoney } from "@/utils/helpers";

export const CartListShorts = async ({
	products,
}: {
	products: CartItemsFragment["items"];
}) => {
	const totalPrice = countTotalPrice(products);
	return (
		<>
			<ul className="flex-grow overflow-y-scroll overscroll-auto">
				{products.map((item) => (
					<li
						className="my-3 flex border border-zinc-300 p-2"
						key={item.product.id}
					>
						<CartShortsProductListItem item={item} />
					</li>
				))}
			</ul>
			<div className="flex justify-between my-4">
				<p> Total:</p>
				<p className="font-bold">{formatMoney(totalPrice / 100)}</p>
			</div>
			<CustomLink href={Paths.CART}>Go to cart</CustomLink>
		</>
	);
};
