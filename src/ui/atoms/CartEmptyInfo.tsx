import { Paths } from "@/paths";
import { CustomLink } from "@/ui/atoms/CustomLink";
import { Icon } from "@/ui/atoms/Icon";

export const CartEmptyInfo = () => {
	return (
		<>
			<p className="my-5">Your shopping cart is empty</p>
            <Icon href="/icons.svg#shopping-cart" width="100%" height="100%" />
			<CustomLink href={Paths.PRODUCTS}>Add products</CustomLink>
		</>
	);
};
