import React from "react";

type Props = {};

export default function Statistics({}: Props) {
	return (
		<div className="bg-primaryGrey">
			<div className="flex flex-col items-center px-11">
				<h2 className="text-3xl font-bold pb-5">Advanced Statistics</h2>
				<p className="text-textGrayish text-center pb-10">
					Track how your link are performing across the web with our advaced
					statistics dashboard.
				</p>
			</div>
		</div>
	);
}
