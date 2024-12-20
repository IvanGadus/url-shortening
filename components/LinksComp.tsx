"use client";
import React, { useState } from "react";

type LinksProps = {
	link: { oldLink: string; newLink: string };
};

export default function LinksComp({ link }: LinksProps) {
	const [copied, setCopied] = useState(false);

	const handleClickCopyButton = () => {
		setCopied(true);
		navigator.clipboard.writeText(link.newLink);
	};
	return (
		<div className="bg-white mt-5 rounded-lg text-lg w-full flex flex-col sm:flex-row sm:items-center sm:p-2 sm:justify-between">
			<p className="py-3 font-semibold px-5 sm:px-0">{link.oldLink}</p>
			<div className="h-px w-full bg-slate-300 sm:hidden"></div>
			<div className="flex flex-col sm:flex-row">
				<p className="py-3 px-5 font-semibold text-primaryCyan">
					{link.newLink}
				</p>
				<button
					onClick={handleClickCopyButton}
					className={`mx-5 rounded-md py-3 px-3 bg-cyan-500 hover:bg-cyan-300 text-white font-bold mb-5 sm:m-0 sm:w-32 sm:py-2  ${
						copied && "bg-primaryPurple hover:bg-primaryPurple"
					}`}
				>
					{copied ? "Copied!" : "Copy"}
				</button>
			</div>
		</div>
	);
}
