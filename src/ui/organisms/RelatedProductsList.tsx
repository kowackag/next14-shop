import { Section } from "../atoms/Section";
import { ProductList } from "@/ui/organisms/ProductList";
import { SubTitle } from "@/ui/atoms/Title";

import { getRelatedProducts } from "@/api/products";

export const RelatedProductsList = async ({
	category,
}: {
	category?: string;
}) => {
	if (!category) return;
	const relatedProducts = await getRelatedProducts({ category: category });
	if (!relatedProducts) return null;
	return (
		<Section data-testid="related-products">
			<SubTitle>Related products</SubTitle>
			<ProductList products={relatedProducts.products} />
		</Section>
	);
};
