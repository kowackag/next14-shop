import { Route } from "next";
import Link from "next/link";
import { Icon } from "../atoms/Icon";

export const Address = () => {
	const socialLinks = [
		{
			name: "linkedin",
			href: "https://www.linkedin.com/in/malgorzata-kowacka/",
		},
		{ name: "github", href: "https://github.com/kowackag" },
		{ name: "facebook", href: "https://www.facebook.com/" },
		{ name: "instagram", href: "https://www.instagram.com/" },
	];
	return (
		<article className="my-8 px-4">
			<h3 className="mb-10 text-3xl font-bold">Eminent</h3>
			<ul>
				<li className="my-2 flex">
					<Icon href="/icons.svg#home" />
					<p>5 Magnolii Street, 00-100 Warsaw, Poland</p>
				</li>
				<li className="my-2 flex">
					<Icon href="/icons.svg#phone" />
					<Link href="tel:+48605593085">+48 605 593 085</Link>
				</li>
				<li className="my-2 flex gap-2">
					<Icon href="/icons.svg#post" />
					<Link href="mailto:kowackag@gmailcom">kowackag@gmailcom</Link>
				</li>
				<li>
					<ul className="flex">
						{socialLinks.map((item) => (
							<li className="p-2" key={item.name}>
								<Link href={item.href as Route} target="_blank">
									<Icon
										href={`/icons.svg#${item.name}`}
										width="18px"
										height="18px"
										aria-label={item.name}
									/>
								</Link>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</article>
	);
};
