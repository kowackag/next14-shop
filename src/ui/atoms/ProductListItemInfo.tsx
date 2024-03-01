import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/helpers";
type ProductListItemInfoProps = {
	product: ProductListItemFragment;
};
export const ProductListItemInfo = ({
	product: { name, price, categories },
}: ProductListItemInfoProps) => {
	return (
		<div className="pb-3 pt-5 text-sm">
			{categories[0] && (
				<h3 className="text-xs text-stone-600">{categories[0].name}</h3>
			)}
			<p className="pb-4 uppercase text-stone-800">{name}</p>
			<p className="font-light text-stone-600">
				<span className="sr-only">Price:</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
