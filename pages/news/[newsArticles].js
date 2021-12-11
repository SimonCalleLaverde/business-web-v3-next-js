// our-domain.com/news/[news-articles]

import { useRouter } from "next/router";

export default function DetailPage() {
	const routerObject = useRouter();

	const newsArticles = routerObject.query.newsArticles;

	// Send A Request To The Backend API
	// To Fetch The News Item With "newsArticles"

	return <h1>The Detail Page</h1>
};