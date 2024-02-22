import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProducts();
	return (
		<>
			<section>
				<h2 className="mb-6 text-2xl sm:text-3xl">Our products</h2>
				<ProductList products={products} />
			</section>
		
		</>
	);
}
