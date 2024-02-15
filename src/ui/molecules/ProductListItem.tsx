import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductListItemInfo } from "@/ui/atoms/ProductListItemInfo";
import { type ProductItemType } from "../types";

type ProductListItemProps = {
	product: ProductItemType;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="w-auto">
			<article>
				<ProductImage src={product.image.src} alt={product.image.alt} />
				<ProductListItemInfo product={product} />
			</article>
		</li>
	);
};
