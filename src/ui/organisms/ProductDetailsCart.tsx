import { AddToCartForm } from "@/ui/molecules/AddToCartForm";
import { AddCommentForm } from "@/ui/molecules/AddCommentForm";
import { SubTitle, Title } from "@/ui/atoms/Title";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { SectionContainer } from "@/ui/atoms/SectionContainer";

import { type ProductGetByIdQuery } from "@/gql/graphql";
import { formatMoney } from "@/utils/helpers";
import { Fragment } from "react";

export const ProductDetailsCart = ({
	product,
}: {
	product: ProductGetByIdQuery["product"];
}) => {
	if (!product) {
		return <p>There is no such product</p>;
	}

	return (
		<SectionContainer>
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
					{product.reviews.map((review) => (
						<Fragment key={review.id}>
							<div className="flex py-2">
								<p>{review.author}</p>
								<p>{review.rating}</p>
							</div>
							<div className="flex">
								<p>{review.description}</p>
							</div>
						</Fragment>
					))}
				</div>
			</article>
		</SectionContainer>
	);
};
