import { type ProductItemType } from "../types";

export const SingleProductTemplate = ({
	product,
}: {
	product: ProductItemType;
}) => {
	return <div>{product.name}</div>;
};
