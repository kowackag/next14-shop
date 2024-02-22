import { AnimatedButton } from "@/ui/atoms/AnimatedButton";
import { ProductCounter } from "@/ui/atoms/ProductCounter";

export const AddToCartForm = () => {
	return (
		<div>
			<div className="mb-6 flex items-center">
				<p className="mr-2">Quantity:</p>
				<ProductCounter />
			</div>
			<AnimatedButton>Add to cart</AnimatedButton>
		</div>
	);
};
