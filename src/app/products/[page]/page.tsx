import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { selectProductsOnPage } from "@/utils";

type ProductPageType = {
	readonly params: { page: string };
	readonly searchParams: { [key: string]: string | string[] };
};
export default async function ProductsPage({ params }: ProductPageType) {
	const offset = (Number(params.page) - 1) * 8 + 1;
	const products = await getProducts(offset);
	const productsOnPage = selectProductsOnPage(products, Number(params.page));

	return (
		<section>
			<h2 className="mb-6 text-2xl sm:text-3xl">Our products</h2>
			<ProductList products={productsOnPage} />
			<Pagination pages={products.length} />
		</section>
	);
}
