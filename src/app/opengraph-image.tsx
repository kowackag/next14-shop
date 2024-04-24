import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "next14 masters sklep";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	// Font
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
				style={{
					background: `
				    linear-gradient(
				      90deg,
                      rgb(5, 81, 97)  0%,
				      rgb(6,172,214) 30%,
				      rgb(6,172,214) 80%,
				      rgb(188, 228, 241) 100%
				    )`,
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<p tw="font-sans uppercase mb-4 p-0 text-[101px] leading-4">next14</p>
				<p tw="font-serif m-0 p-0 font-black">eminent</p>
				<p tw="m-0 mt-2">Shop</p>
			</div>
		),
		{
			...size,
		},
	);
}
