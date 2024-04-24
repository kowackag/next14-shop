import { type CartItemsFragment } from "@/gql/graphql";
import { Paths } from "@/paths";

import { CustomLink } from "@/ui/atoms/CustomLink";

import { CartShortsProductListItem } from "@/ui/molecules/CartShortsProductListItem";

export const CartListShorts = async ({
	products,
}: {
	products: CartItemsFragment["items"];
}) => {
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
			<CustomLink href={Paths.CART}>Go to cart</CustomLink>
		</>
	);
};
