import React from "react";
import LinkInput from "./LinkInput";
import LinksBlock from "./LinksBlock";

export default function ShortenSection() {
	return (
		<div className="bg-primaryGrey w-full h-max flex flex-col relative overflow-clip">
			<div className="relative flex flex-col">
				<div className="absolute w-screen h-1/2 z-0 left-0 bg-white"></div>
				<LinkInput />
			</div>
			<LinksBlock />
		</div>
	);
}
