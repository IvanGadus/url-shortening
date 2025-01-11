"use client";
import React, { useState } from "react";
import LinkInput from "./LinkInput";
import LinksComp from "./LinksComp";

export default function ShortenSection() {
	const [links, setLinks] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	return (
		<div className="bg-primaryGrey w-full h-max flex flex-col relative overflow-clip ">
			<div className="relative flex flex-col">
				<div className="absolute w-screen h-1/2 z-0 left-0 bg-white"></div>
				<LinkInput setLinks={setLinks} loading={loading} />
			</div>
			<div className="w-full bg-primaryGrey flex flex-col px-11 md:px-20 lg:px-36 pb-20">
				{links.map((link, idx) => {
					return <LinksComp link={link} key={idx} setLoading={setLoading} />;
				})}
			</div>
		</div>
	);
}
