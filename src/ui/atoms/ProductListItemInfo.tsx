import { ProductItemType } from "../types";
import { formatMoney } from "@/utils";
type ProductListItemInfoProps = {
	product: ProductItemType;
};
export const ProductListItemInfo = ({ product: { name, price } }: ProductListItemInfoProps) => {
	return (
		<div>
			<h3>{name}</h3>
			<p>
				<span className="sr-only">Cena:</span>
				{formatMoney(price/100)}
			</p>
		</div>
	);
};
