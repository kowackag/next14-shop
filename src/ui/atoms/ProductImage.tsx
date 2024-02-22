export const ProductImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="overflow-hidden h-full w-full max-w-96 m-auto">
			<img
				alt={alt}
				src={src}
				width={220}
				height={220}
				className="h-full w-full object-contain object-center transition-all group-hover:scale-105"
			/>
		</div>
	);
};
