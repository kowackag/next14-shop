import { type ProductItemType } from "../types";
// import { ProductCounter } from "./ProductCounter";
import { formatMoney } from "@/utils";
type ProductListItemInfoProps = {
	product: ProductItemType;
};
export const ProductListItemInfo = ({
	product: { name, price },
}: ProductListItemInfoProps) => {
	return (
		<div className="pb-3 pt-5 text-sm">
			<p className="text-xs text-stone-600">Clothes</p>
			<h3 className="pb-4 uppercase text-stone-800">{name}</h3>
			<p className="font-light text-stone-600">
				<span className="sr-only">Price:</span>
				{formatMoney(price / 100)}
			</p>
			{/* <ProductCounter /> */}
		</div>
	);
};
