import Link from "next/link";
import React from "react";

type navProps = {
	isOpen: boolean;
};

export default function MoblieNav({ isOpen }: navProps) {
	return (
		<div
			className={`bg-primaryPurple w-10/12 h-max flex flex-col rounded-lg self-center text-white font-medium text-lg overflow-hidden  transition-[max-height] duration-500 ease-in-out sm:hidden fixed top-24 z-50 ${
				isOpen ? "max-h-[400px]" : "max-h-0"
			}`}
		>
			<ul className="flex flex-col items-center gap-6 my-5 mt-8">
				<Link href={"#"}>Features</Link>
				<Link href={"#"}>Pricing</Link>
				<Link href={"#"}>Resources</Link>
			</ul>
			<div className="h-px bg-slate-500 w-10/12 self-center"></div>
			<ul className="flex flex-col items-center gap-6 my-5 mb-9">
				<Link className="" href={`#`}>
					Login
				</Link>
				<Link
					className="w-10/12 text-center py-2 bg-cyan-500 text-white rounded-3xl hover:text-slate-200 hover:bg-cyan-300 transition-colors duration-150"
					href={`#`}
				>
					Sign Up
				</Link>
			</ul>
		</div>
	);
}
