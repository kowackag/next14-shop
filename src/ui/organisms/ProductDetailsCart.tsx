import { type ProductGetByIdQuery } from "@/gql/graphql";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { AddToCartForm } from "@/ui/molecules/AddToCartForm";
import { formatMoney } from "@/utils";
import { Title } from "@/ui/atoms/Title";
export const ProductDetailsCart = ({
	product,
}: {
	product: ProductGetByIdQuery["product"];
}) => {
	if (!product) {
		return <p>There is no such product</p>;
	}
	return (
		<section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:w-2/3">
			<div className="mb-8 w-full">
				{product.images[0] && (
					<ProductImage src={product.images[0].url} alt={product.name} />
				)}
			</div>
			<div className="mb-8 w-full">
				<Title>{product.name}</Title>
				<p className="mb-6">Rating: {Math.floor(Math.random() * 5) + 1}</p>
				<p className="mb-6 text-2xl">{formatMoney(product.price / 100)}</p>
				<p className="mb-8">{product.description}</p>
				<AddToCartForm />
			</div>
		</section>
	);
};
