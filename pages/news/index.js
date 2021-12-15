// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
	return (
		<Fragment>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href="/news/nextjs-is-a-great-framework-article">
						NextJS Is A Great Framework Article
					</Link>
				</li>
				
				<li>Something Else Article</li>
			</ul>
		</Fragment>
	);
};