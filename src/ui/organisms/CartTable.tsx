import { CartProductListItem } from "../molecules/CartProductListItem";
import { type CartItemsFragment } from "@/gql/graphql";

export const CartTable = ({
	products,
	cartId,
}: {
	products: CartItemsFragment["items"];
	cartId: string;
}) => {
	return (
		<table className="w-full border-t border-zinc-200">
			<thead>
				<tr className="hidden justify-items-center border-b border-l border-r border-zinc-200  font-semibold md:grid md:grid-cols-6">
					<th className="p-4">Image</th>
					<th className="p-4">Product</th>
					<th className="p-4">Price</th>
					<th className="p-4">Quantity</th>
					<th className="hidden p-4 md:block">Total</th>
					<th className="hidden p-4 md:block">Remove</th>
				</tr>
			</thead>
			<tbody data-testid="products-list">
				{products.length ? (
					products.map((item) =>
						!item.product ? null : (
							<CartProductListItem
								key={item.product.id}
								product={item.product}
								quantity={item.quantity}
								cartId={cartId}
							/>
						),
					)
				) : (
					<tr className="grid grid-cols-1 justify-items-center border-b border-l border-r py-4 md:border-zinc-200">
						<td>Your shoping cart is empty</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};
