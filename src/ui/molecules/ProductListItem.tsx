import Link from "next/link";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductListItemInfo } from "@/ui/atoms/ProductListItemInfo";
import { Paths } from "@/paths";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="group w-auto border-[1px] border-solid border-zinc-100 p-3  transition-shadow hover:shadow-md">
			<Link href={`${Paths.PRODUCT}/${product.id}`}>
				<article>
					<div className="h-80">
						{product.images[0] && (
							<ProductImage src={product.images[0].url} alt={product.name} />
						)}
					</div>
					<ProductListItemInfo product={product} />
				</article>
			</Link>
		</li>
	);
};
