export type ProductItemType = {
	id: string;
	name: string;
	price: number;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	description: string;
	longDescription: string;
	image?: {
		alt: string;
		src: string;
	};
};
