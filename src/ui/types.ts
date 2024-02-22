export type ProductItemType = {
	id: string;
	name: string;
	price: number;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	longDescription: string;
	image: {
		alt: string;
		src: string;
	};
};
