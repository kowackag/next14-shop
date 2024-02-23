import { type ProductItemType } from "../types";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductListItemInfo } from "@/ui/atoms/ProductListItemInfo";
import Link from "next/link";
import { Paths } from "@/paths";

type ProductListItemProps = {
	product: ProductItemType;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="group w-auto border-[1px] border-solid border-zinc-100 p-3  transition-shadow hover:shadow-md">
			<Link href={`${Paths.PRODUCT}/${product.id}`}>
				<article>
					<div className="h-80">
						<ProductImage src={product.image.src} alt={product.image.alt} />
					</div>
					<ProductListItemInfo product={product} />
				</article>
			</Link>
		</li>
	);
};
