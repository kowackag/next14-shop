import { CustomLink } from "@/ui/atoms/CustomLink";
import { Icon } from "@/ui/atoms/Icon";

import { Paths } from "@/paths";

export const CartEmptyInfo = () => {
	return (
		<>
			<p className="my-5 text-sm">Your shopping cart is empty</p>
			<div className="m-auto opacity-15">
				<Icon href="/icons.svg#shopping-cart" width="250" height="250" />
			</div>

			<CustomLink href={Paths.PRODUCTS}>Add products</CustomLink>
		</>
	);
};
