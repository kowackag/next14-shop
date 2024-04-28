import {
	type CartItemsFragment,
	type ProductListItemFragment,
} from "../gql/graphql";

export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export const createPaginationLinks = (
	length: number,
	path: string,
	perPage: number,
) => {
	const pages = Math.ceil(length / perPage);
	const links = new Array(pages).fill(0).map((_, index) => ({
		href: `/${path}/${index + 1}`,
		pageNumber: index + 1,
	}));
	return links;
};

export const selectProductsOnPage = (
	products: ProductListItemFragment[],
	page: number | string,
	perPage: number,
) => {
	const start = (Number(page) - 1) * perPage;
	return products.slice(start, perPage + start);
};

export const countTotalPrice = (products: CartItemsFragment["items"]) => {
	return products.reduce((acc, elem) => {
		return acc + elem.quantity * elem.product.price;
	}, 0);
};
