import { getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuspectedProductsList = async () => {
	const products = await getProducts();
	await sleep(5000);
	return (
		<section>
			<ProductList products={products.slice(-4)} />
		</section>
	);
};
