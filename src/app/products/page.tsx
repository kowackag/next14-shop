import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";
const products: ProductItemType[] = [
	{
		id: "1",
		name: "T-shirt",
		price: 1889,
		image: {
			alt: "grey t-shirt",
			src: "/product_01.webp",
		},
	},
	{
		id: "2",
		name: "Elegant shoes",
		price: 10100,
		image: {
			alt: "brown shoes",
			src: "/product_02.webp",
		},
	},
	{
		id: "3",
		name: "Men scarf",
		price: 2519,
		image: {
			alt: "scarf",
			src: "/product_03.webp",
		},
	},
	{
		id: "4",
		name: "Bag",
		price: 7799,
		image: {
			alt: "bag",
			src: "/product_04.webp",
		},
	},
];
export default function Home() {
	return (
		<section>
			<h2 className="mb-6 text-2xl sm:text-3xl">Our products</h2>
			<ProductList products={products} />
		</section>
	);
}
