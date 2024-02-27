import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { selectProductsOnPage } from "@/utils";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { Title } from "@/ui/atoms/Title";

type ProductPageType = {
	readonly params: { page: string };
	readonly searchParams: { [key: string]: string | string[] };
};
export default async function ProductsPage({ params }: ProductPageType) {
	const productsNumberOnPage = 4;
	// const offset = (Number(params.page) - 1) * 4 + 1;
	const products = await getProducts();
	const productsOnPage = selectProductsOnPage(
		products,
		params.page,
		productsNumberOnPage,
	);

	return (
		<SectionContainer>
			<Title>Our products</Title>
			<ProductList products={productsOnPage} />
			<Pagination
				pages={products.length}
				productsNumberOnPage={productsNumberOnPage}
				path="products"
			/>
		</SectionContainer>
	);
}
