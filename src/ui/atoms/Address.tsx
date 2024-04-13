import Link from "next/link";

export const Address = () => {
	return (
		<article className="my-8 px-4">
			<h3 className="mb-10 text-3xl font-bold">Eminent</h3>
			<ul>
				<li className="my-2 flex">
					<svg className="mr-2" width="24px" height="24px">
						<use href="/icons.svg#home"></use>
					</svg>
					<p>5 Magnolii Street, 00-100 Warsaw, Poland</p>
				</li>
				<li className="my-2 flex">
					<svg className="mr-2" width="24px" height="24px">
						<use href="/icons.svg#phone"></use>
					</svg>
					<Link href="tel:+48605593085">+48 605 593 085</Link>
				</li>
				<li className="my-2 flex">
					<svg className="mr-2" width="24px" height="24px">
						<use href="/icons.svg#post"></use>
					</svg>
					<Link href="mailto:kowackag@gmailcom">kowackag@gmailcom</Link>
				</li>
				<li>
					<ul className="flex">
						<li className="p-2">
							<Link
								href="https://www.linkedin.com/in/malgorzata-kowacka/"
								target="_blank"
							>
								<svg width="18px" height="18px">
									<use href="/icons.svg#linkedin"></use>
								</svg>
							</Link>
						</li>
						<li className="p-2">
							<Link href="https://github.com/kowackag" target="_blank">
								<svg width="18px" height="18px">
									<use href="/icons.svg#github"></use>
								</svg>
							</Link>
						</li>
						<li className="p-2">
							<Link href="https://www.facebook.com/" target="_blank">
								<svg width="18px" height="18px">
									<use href="/icons.svg#facebook"></use>
								</svg>
							</Link>
						</li>
						<li className="p-2">
							<Link href="https://www.facebook.com/" target="_blank">
								<svg width="18px" height="18px">
									<use href="/icons.svg#instagram"></use>
								</svg>
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</article>
	);
};
