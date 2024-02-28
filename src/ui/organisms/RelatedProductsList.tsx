import { ProductList } from "@/ui/organisms/ProductList";
import { SubTitle } from "@/ui/atoms/Title";

import { getRelatedProducts } from "@/api/products";
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const RelatedProductsList = async ({
	category,
	id,
}: {
	category?: string;
	id: string;
}) => {
	if (!category) {
		return null;
	}
	const products = await getRelatedProducts({ category: category, id });

	return (
		<div data-testid="related-products">
			<SubTitle>Related products</SubTitle>
			<ProductList products={products} />
		</div>
	);
};
