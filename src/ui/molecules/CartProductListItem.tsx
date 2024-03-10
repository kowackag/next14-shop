import Link from "next/link";
import { type Route } from "next";
import { ProductImage } from "../atoms/ProductImage";
import { OptimisticProductCounter } from "../atoms/OptimisticProductCounter";
import { formatMoney } from "@/utils/helpers";
import { Paths } from "@/paths";

export const CartProductListItem = ({
	cartId,
	product,
	quantity,
}: {
	cartId: string;
	product: {
		id: string;
		name: string;
		slug: string;
		price: number;
		images: {
			url: string;
		}[];
	};
	quantity: number;
}) => {
	return (
		<tr className="grid grid-cols-3 items-center justify-items-center border-b border-l border-r md:grid-cols-5 md:border-zinc-200">
			<td className="w-32 p-4">
				{product.images[0] && (
					<ProductImage src={product.images[0]?.url} alt={product.name} />
				)}
			</td>
			<td className="col-span-2 p-4 font-semibold md:col-span-1 md:font-normal ">
				<Link href={`${Paths.PRODUCT}/${product.id}` as Route}>
					{product.name}
				</Link>
			</td>
			<td className="p-4">{formatMoney(product.price / 100)}</td>
			<td className="p-4">
				<OptimisticProductCounter
					cartId={cartId}
					productId={product.id}
					quantity={quantity}
				/>
			</td>
			<td className=" p-4">{formatMoney((product.price / 100) * quantity)}</td>
		</tr>
	);
};
