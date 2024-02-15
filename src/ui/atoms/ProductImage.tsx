export const ProductImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="overflow-hidden">
			<img
				alt={alt}
				src={src}
				width={180}
				height={220}
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
};
