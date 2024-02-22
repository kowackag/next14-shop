import { ProductImage } from "../atoms/ProductImage";
import { AddToCartForm } from "../molecules/AddToCartForm";
import { type ProductItemType } from "../types";
import { formatMoney } from "@/utils";
export const ProductDetailsCart = ({
	product,
}: {
	product: ProductItemType;
}) => {
	return (
		<section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3">
			<div className="mb-8 w-full">
				<ProductImage src={product.image.src} alt={product.image.alt} />
			</div>
			<div className="mb-8 w-full">
				<h1 className="mb-6 text-3xl">{product.name} </h1>
				<p className="mb-6">Rating: {product.rating.rate}</p>
				<p className="mb-6 text-2xl">{formatMoney(product.price / 100)}</p>
				<p className="mb-8">{product.longDescription}</p>
				<AddToCartForm />
			</div>
		</section>
	);
};
