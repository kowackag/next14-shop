import { type ProductListItemType } from "../types";
import { formatMoney } from "@/utils";
type ProductListItemInfoProps = {
	product: ProductListItemType;
};
export const ProductListItemInfo = ({
	product: { name, price, category },
}: ProductListItemInfoProps) => {
	return (
		<div className="pb-3 pt-5 text-sm">
			<p className="text-xs text-stone-600">{category}</p>
			<h3 className="pb-4 uppercase text-stone-800">{name}</h3>
			<p className="font-light text-stone-600">
				<span className="sr-only">Price:</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
