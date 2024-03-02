import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
export const ProductList = ({
	products,
}: {
	products: ProductListItemFragment[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="grid w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-4"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
