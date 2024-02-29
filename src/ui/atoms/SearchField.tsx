"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const SearchField = () => {
	const [searchPhrase, setSearchPhrase] = useState("");
	const router = useRouter();

	const onChangePhrase = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchPhrase(e.target.value);
	};

	useEffect(() => {
		if (searchPhrase) {
			const debounce = setTimeout(() => {
				console.log(searchPhrase);
				router.replace(`/search?query=${searchPhrase}`);
			}, 500);

			return () => clearTimeout(debounce);
		}
	}, [searchPhrase, router]);

	return (
		<div className="hidden lg:inline-block">
			<label className="hidden" htmlFor="search">
				Search
			</label>
			<div>
				<input
					className="rounded-lg border-[1px] px-2 py-1 text-sm outline-none placeholder:italic"
					onChange={onChangePhrase}
					placeholder="Search product"
					id="search"
					name="searchPhrase"
					value={searchPhrase}
					role="searchbox"
				/>
			</div>
		</div>
	);
};
