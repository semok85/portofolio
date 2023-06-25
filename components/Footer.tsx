import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constant";
import Link from "next/link";

function FooterColumn({ title, links }: { title: string; links: string[] }) {
	return (
		<div className="footer_column">
			<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
				{title}
			</h4>
			<ul className="flex flex-col gap-2">
				{links.map((link) => (
					<Link key={link} href="/">
						{link}
					</Link>
				))}
			</ul>
		</div>
	);
}

export default function Footer() {
	return (
		<section className="flexStart footer">
			<div className="flex flex-col gap-12 w w-full">
				<div className="flex items-start flex-col">
					<Image src="logo.svg" width={116} height={38} alt="logo" />
					<p className="text-start text-sm mt-5 max-w-xs">
						Flexibble is the world&apos;s leading community for creatives to
						share, grow, and get hired.
					</p>
				</div>
				<div className="flex flex-wrap gap-8">
					<FooterColumn
						title={footerLinks[0].title}
						links={footerLinks[0].links}
					/>
					<div className="flex-1 flex flex-col gap-4">
						<FooterColumn
							title={footerLinks[1].title}
							links={footerLinks[1].links}
						/>
						<FooterColumn
							title={footerLinks[2].title}
							links={footerLinks[2].links}
						/>
					</div>

					<FooterColumn
						title={footerLinks[3].title}
						links={footerLinks[3].links}
					/>

					<div className="flex-1 flex flex-col gap-4">
						<FooterColumn
							title={footerLinks[4].title}
							links={footerLinks[4].links}
						/>
						<FooterColumn
							title={footerLinks[5].title}
							links={footerLinks[5].links}
						/>
					</div>

					<FooterColumn
						title={footerLinks[6].title}
						links={footerLinks[6].links}
					/>
				</div>
			</div>
			<div className="flexBetween footer_copyright">
				<p>@ 2023 Flexibble. All rights reserved</p>
				<p className="text-gray">
					<span className="text-sm font-semibold">10,214</span> projects
					submitted
				</p>
			</div>
		</section>
	);
}
