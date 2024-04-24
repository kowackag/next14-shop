import { ProductImage } from "@/ui/atoms/ProductImage";
import { formatMoney } from "@/utils/helpers";

export const CartShortsProductListItem = ({
	item,
}: {
	item: {
		quantity: number;
		product: {
			id: string;
			name: string;
			slug: string;
			price: number;
			images: Array<{ url: string }>;
		};
	};
}) => {
	return (
		<>
			{item.product.images[0] ? (
				<ProductImage
					className="max-w-24"
					src={item.product.images[0]?.url}
					alt={item.product.name}
				/>
			) : null}
			<div className="w-2/3 text-sm">
				<h3 className="mb-3 text-sm font-bold">{item.product.name}</h3>
				<p className="flex justify-between">
					<span>Price:</span>
					<span className="font-bold">
						{formatMoney(item.product.price / 100)}
					</span>
				</p>
				<p className="flex justify-between">
					<span>Quantity:</span>
					<span className="font-bold">{item.quantity}</span>
				</p>
			</div>
		</>
	);
};
