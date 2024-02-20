import { type ProductItemType } from "../types";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductListItemInfo } from "@/ui/atoms/ProductListItemInfo";

type ProductListItemProps = {
	product: ProductItemType;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="group w-auto max-w-80 border-[1px] border-solid border-zinc-100 p-3  transition-shadow hover:shadow-md sm:max-w-max">
			<article>
				<ProductImage src={product.image.src} alt={product.image.alt} />
				<ProductListItemInfo product={product} />
			</article>
		</li>
	);
};
