import { ProductItemType } from "./ui/types";
const PRODUCTS_PER_PAGE = 8;

export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export const createPaginationLinks = (length: number, path: string) => {
	const pages = Math.ceil(length / PRODUCTS_PER_PAGE);
	const links = new Array(pages).fill(0).map((_, index) => ({
		href: `/${path}/${index + 1}`,
		pageNumber: index + 1,
	}));
	return links;
};

export const selectProductsOnPage = (
	products: ProductItemType[],
	page: number,
) => {
	const start = (page - 1) * PRODUCTS_PER_PAGE;
	return products.slice(start, PRODUCTS_PER_PAGE + start);
};
