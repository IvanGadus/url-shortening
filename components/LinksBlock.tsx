"use client";
import React, { useState } from "react";
import LinksComp from "./LinksComp";

export default function LinksBlock() {
	const [copied, setCopied] = useState(false);
	const links = [
		{ oldLink: "old link", newLink: "new link" },
		{ oldLink: "old link", newLink: "new link" },
	];

	return (
		<div className="w-full bg-primaryGrey flex flex-col px-11 md:px-20 lg:px-36  pb-32">
			{links.map((link, idx) => {
				return <LinksComp link={link} key={idx} />;
			})}
		</div>
	);
}
