"use client";

import { useState } from "react";

export const SearchField = () => {
	const [searchPhrase, setSearchPhrase] = useState("");

	const onChangePhrase = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		if (e.target.value) {
			setSearchPhrase(e.target.value);
		}
	};

	return (
		<>
			<label className="hidden" htmlFor="search">
				Search
			</label>
			<div>
				<input
					onChange={onChangePhrase}
					id="search"
					name="searchPhrase"
					value={searchPhrase}
				/>
			</div>
		</>
	);
};
