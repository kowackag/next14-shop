import { getProducts, getSortedByPriceProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { selectProductsOnPage } from "@/utils/helpers";
import { Section } from "@/ui/atoms/Section";
import { Title } from "@/ui/atoms/Title";
import { SortByPriceProductsButton } from "@/ui/atoms/SortByPriceProductsButton";

type ProductPageType = {
	readonly params: { page: string };
	readonly searchParams: { sorted: string };
};
export default async function ProductsPage({
	params,
	searchParams,
}: ProductPageType) {
	const sorted = searchParams.sorted?.toString() ?? "";

	const getSortedBy = (sort: string) => {
		if (sort === "price") return "PRICE";
		if (sort === "rating") return "RATING";
	};

	const products = sorted
		? await getSortedByPriceProducts(getSortedBy(sorted))
		: await getProducts();

	const productsNumberOnPage = 4;
	const productsOnPage = selectProductsOnPage(
		products.data,
		params.page,
		productsNumberOnPage,
	);

	return (
		<Section>
			<Title>Our products</Title>
			<SortByPriceProductsButton />
			<ProductList products={productsOnPage} />
			<Pagination
				pages={products.data.length}
				productsNumberOnPage={productsNumberOnPage}
				path="products"
				params={sorted ? `?sorted=${sorted}` : ""}
			/>
		</Section>
	);
}
