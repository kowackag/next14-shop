import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { ProductItemType } from "../types";
export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul
			className="grid w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
