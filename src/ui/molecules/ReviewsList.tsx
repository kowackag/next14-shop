import { StarsBox } from "../atoms/StarsBox";
import { SubTitle } from "../atoms/Title";

export const ReviewsList = ({
	reviews,
}: {
	reviews: {
		id: string;
		createdAt: unknown;
		rating: number;
		author: string;
		description: string;
	}[];
}) => {
	return (
		<article className="col-span-3 mb-8 w-full text-base">
			<SubTitle>Reviews</SubTitle>
			<ul>
				{reviews.slice(0, 5).map((review) => (
					<li key={review.id}>
						<div className="flex justify-between py-2">
							<p className="text-sm">{review.author}</p>
							<StarsBox rating={review.rating} />
						</div>
						<div className="flex">
							<p>{review.description}</p>
						</div>
					</li>
				))}
			</ul>
		</article>
	);
};
