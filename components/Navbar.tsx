import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constant";
import { Button } from "./ui/button";
import AuthProfiders from "./AuthProfiders";

export default function Navbar() {
	const session = {};
	return (
		<nav className="flexBetween navbar">
			<div className="flex-1 flexStart font-medium gap-10">
				<Link href="/">
					<Image src="/logo.svg" width={116} height={43} alt="logo" />
				</Link>
				<ul className="hidden gap-8 xl:flex">
					{NavLinks.map((link) => (
						<Link href={link.href} key={link.text}>
							{link.text}
						</Link>
					))}
				</ul>
			</div>
			<div className="flexCenter gap-4">
				{session ? (
					<>
						<h1>Profil Menu</h1>
						<Link href="/create-project">
							<Button>Share Work</Button>
						</Link>
					</>
				) : (
					<AuthProfiders />
				)}
			</div>
		</nav>
	);
}
