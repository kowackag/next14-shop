import { AddToCartForm } from "@/ui/molecules/AddToCartForm";
import { SubTitle, Title } from "@/ui/atoms/Title";
import { ProductImage } from "@/ui/atoms/ProductImage";

import { type ProductGetByIdQuery } from "@/gql/graphql";
import { formatMoney } from "@/utils/helpers";
import { AddCommentForm } from "../molecules/AddCommentForm";

export const ProductDetailsCart = ({
	product,
}: {
	product: ProductGetByIdQuery["product"];
}) => {
	if (!product) {
		return <p>There is no such product</p>;
	}

	return (
		<div className="w-full">
			<article className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
				<div className="mb-8 w-full">
					{product.images[0] && (
						<ProductImage src={product.images[0].url} alt={product.name} />
					)}
				</div>
				<div className="mb-8 w-full">
					<Title>{product.name}</Title>
					{product.rating && (
						<p className="mb-6">
							Rating: {Math.round(product.rating * 100) / 100}
						</p>
					)}
					<p className="mb-6 text-2xl">{formatMoney(product.price / 100)}</p>
					<p className="mb-8">{product.description}</p>
					<AddToCartForm id={product.id} />
				</div>
			</article>
			<article className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
				<div className="mb-8 w-full">
					<SubTitle>Add comment</SubTitle>
					<AddCommentForm id={product.id} />
				</div>
				<div className="mb-8 w-full">
					<SubTitle>Reviews</SubTitle>
				</div>
			</article>
		</div>
	);
};
