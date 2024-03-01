"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useDebounce } from "@/utils/useDebounce";

export const SearchField = () => {
	const router = useRouter();

	const searchParams = useSearchParams();
	const query = searchParams.get("query") ?? "";
	const [searchPhrase, setSearchPhrase] = useState(query);
	// const [searchPhrase, setSearchPhrase] = useState("");

	const debouncedPhrase = useDebounce<string>(searchPhrase, 500);
	// const params = new URLSearchParams(searchParams.toString());

	useEffect(() => {
		if (!debouncedPhrase) return;
		// if (debouncedPhrase) {
		router.push(`/search?query=${debouncedPhrase}`);
		setSearchPhrase('')
		// router.replace(`/search?query=${debouncedPhrase}`);
		// }
	}, [debouncedPhrase, router]);

	const handleChangePhrase = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearchPhrase(e.target.value);
	};

	return (
		<div className="hidden lg:inline-block">
			<label className="hidden" htmlFor="search">
				Search
			</label>
			<div>
				<input
					className="rounded-lg border-[1px] px-2 py-1 text-sm outline-none placeholder:italic"
					onChange={handleChangePhrase}
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
