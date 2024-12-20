"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MoblieNav from "./MoblieNav";

export default function Navigation() {
	const [toggleBurgerBtn, setToggleBurgerBtn] = useState(false);

	return (
		<header className="flex flex-col relative">
			<nav className="flex items-center justify-between  text-slate-400 h-24 px-11 md:px-20 lg:px-36 font-semibold text-sm lg:text-lg">
				<div className="flex flex-row gap-2 lg:gap-10">
					<Link href={"#"}>
						<Image
							src="./logo.svg"
							alt="Shortly logo"
							width={100}
							height={100}
						/>
					</Link>
					<ul className=" hidden sm:flex flex-row gap-6 ml-6 items-center  ">
						<li>
							<Link className="hover:text-black" href={"#"}>
								Features
							</Link>
						</li>
						<li>
							<Link className="hover:text-black" href={"#"}>
								Pricing
							</Link>
						</li>
						<li>
							<Link className="hover:text-black" href={"#"}>
								Resources
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex gap-6 items-center">
					<Link className="hover:text-black hidden sm:block" href={`#`}>
						Login
					</Link>
					<Link
						className="hidden sm:block px-4 py-2 bg-cyan-500 text-white rounded-3xl hover:text-slate-200 hover:bg-cyan-300 transition-colors duration-150"
						href={`#`}
					>
						Sign Up
					</Link>
					<button
						onClick={() => setToggleBurgerBtn((prev) => !prev)}
						className=" block sm:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</nav>
			<MoblieNav isOpen={toggleBurgerBtn} />
		</header>
	);
}
