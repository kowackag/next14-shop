import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";
type ProductListItemInfoProps = {
	product: ProductListItemFragment;
};
export const ProductListItemInfo = ({
	product: { name, price, categories },
}: ProductListItemInfoProps) => {
	return (
		<div className="pb-3 pt-5 text-sm">
			{categories[0] && (
				<p className="text-xs text-stone-600">{categories[0].name}</p>
			)}
			<h3 className="pb-4 uppercase text-stone-800">{name}</h3>
			<p className="font-light text-stone-600">
				<span className="sr-only">Price:</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
